import nodemailer from 'nodemailer';
import { rateLimit } from '../../lib/rateLimit';

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
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    if (!rateLimit(req, { max: 5, windowMs: 15 * 60 * 1000 })) {
        return res.status(429).json({ message: 'Demasiados intentos, espera unos minutos.' });
    }

    const { tel } = req.body || {};
    if (!tel || typeof tel !== 'string' || tel.length > 20) {
        return res.status(400).json({ message: 'Teléfono no válido.' });
    }

    const safeTel = escapeHtml(tel);

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.FOOTER_EMAIL_TO || process.env.CONTACT_EMAIL_TO,
        subject: 'Nuevo Número de Teléfono Recibido',
        text: `Teléfono: ${tel}`,
        html: `<b>Teléfono:</b> ${safeTel}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email successfully sent' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
}
