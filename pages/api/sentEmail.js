import sharp from 'sharp';
import nodemailer from 'nodemailer';
import { rateLimit } from '../../lib/rateLimit';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '7mb',
    },
  },
};

const MAX_IMAGES = 8;
const ALLOWED_MIME = new Set(['image/jpeg', 'image/jpg', 'image/png', 'image/heic', 'image/webp']);

const escapeHtml = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (!rateLimit(req, { max: 5, windowMs: 15 * 60 * 1000 })) {
    return res.status(429).json({ message: 'Demasiados intentos, espera unos minutos.' });
  }

  const { name, tel, service, images = [], acceptedPolicy } = req.body || {};

  if (!acceptedPolicy) {
    return res.status(400).json({ message: 'Debes aceptar la política de privacidad.' });
  }
  if (!name || !tel || !service) {
    return res.status(400).json({ message: 'Faltan campos obligatorios.' });
  }
  if (!Array.isArray(images) || images.length > MAX_IMAGES) {
    return res.status(400).json({ message: `Máximo ${MAX_IMAGES} imágenes.` });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const attachments = (
    await Promise.all(
      images.map(async (image, index) => {
        const matches = typeof image === 'string' && image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (!matches) return null;

        const mime = matches[1].toLowerCase();
        if (!ALLOWED_MIME.has(mime)) return null;

        let buffer = Buffer.from(matches[2], 'base64');
        try {
          buffer = await sharp(buffer).resize(900).jpeg({ quality: 40 }).toBuffer();
        } catch {
          return null;
        }

        return {
          filename: `Image${index + 1}.jpeg`,
          content: buffer,
        };
      })
    )
  ).filter(Boolean);

  const safeName = escapeHtml(name);
  const safeTel = escapeHtml(tel);
  const safeService = escapeHtml(service);

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL_TO,
    subject: `NUEVO TRABAJO para ${safeName}`,
    html: `
      <p>Nombre: ${safeName}</p>
      <p>Teléfono: <a href="https://wa.me/34${encodeURIComponent(tel)}">${safeTel}</a></p>
      <p>Servicio: ${safeService}</p>
    `,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
