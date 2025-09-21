import sharp from 'sharp';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '7mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, tel, service, images } = req.body;
  const WEBHOOK_API_KEY = 'clave-secreta-para-mi-webhook-12345'; // <-- ¡LA MISMA CLAVE SECRETA!

  // 1. Envío del Webhook a la App del Taller
  try {
    const whatsappLink = `https://wa.me/34${tel.replace(/\s+/g, '')}`;
    const webhookUrl = 'https://us-central1-entreprendas-ticket-manager.cloudfunctions.net/addPendingTicketFlow';

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-api-key': WEBHOOK_API_KEY // <-- AÑADIMOS LA LLAVE
      },
      body: JSON.stringify({
        clientName: name,
        requestedService: service,
        whatsappLink: whatsappLink,
      }),
    });

    if (!webhookResponse.ok) {
      const errorData = await webhookResponse.json();
      throw new Error(errorData.message || 'Webhook failed');
    }
  } catch (webhookError) {
    console.error('CRITICAL: Error sending data to workshop app:', webhookError);
  }

  // 2. Envío del Email
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = await Promise.all(
      (images || []).map(async (image, index) => {
        const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (!matches) return null;
        let buffer = Buffer.from(matches[2], 'base64');
        buffer = await sharp(buffer)
          .resize(900)
          .jpeg({ quality: 40 })
          .toBuffer();
        return {
          filename: `Image${index + 1}.jpeg`,
          content: buffer,
        };
      }).filter(Boolean)
    );

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'andres03ortega@gmail.com, norainesmontoya@hotmail.com, norainesmontoya67@gmail.com',
      subject: `NUEVO TRABAJO para ${name}`,
      html: `
        <p>Nombre: ${name}</p>
        <p>Teléfono: https://wa.me/34${tel}</p>
        <p>Servicio: ${service}</p>
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);
  } catch (emailError) {
    console.error('Error sending email:', emailError);
    return res.status(500).json({ message: 'Failed to send email', detail: emailError.toString() });
  }
  
  // 3. Respuesta final de éxito
  return res.status(200).json({ message: 'Request processed successfully' });
}