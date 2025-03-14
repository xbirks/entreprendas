// pages/api/sendSimpleEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { tel } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'andres03ortega@gmail.com',
        subject: 'Nuevo Número de Teléfono Recibido',
        text: `Teléfono: ${tel}`, 
        html: `<b>Teléfono:</b> ${tel}`,
    };



    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email', error: error.toString() });
        }
        res.status(200).json({ message: 'Email successfully sent', info: info.response });
    });
}
