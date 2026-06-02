import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running.' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, company, sector, budget, timeline, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Lütfen tüm alanları doldurun.' });
  }

  // Validate environment variables
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('WARNING: SMTP credentials are not configured in .env file!');
    // Fallback: log contact message and return mock success to prevent failure during initial test
    console.log(`Received contact form message:
Name: ${name}
Email: ${email}
Company: ${company || '-'}
Sector: ${sector || '-'}
Budget: ${budget || '-'}
Timeline: ${timeline || '-'}
Message: ${message}`);
    return res.status(200).json({
      success: true,
      message: 'Mesaj alındı (E-posta SMTP yapılandırması eksik olduğu için konsola yazdırıldı).'
    });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.akinkaradas.com.tr',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false // bypass SSL verification issues with generic hosts
      }
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send from SMTP user to prevent spoofing block
      replyTo: email, // Reply goes to sender
      to: process.env.RECEIVER_EMAIL || 'akin@akinkaradas.com.tr',
      subject: `akinkaradas.com.tr - Yeni İletişim Formu Mesajı`,
      text: `Adı Soyadı: ${name}\nE-posta: ${email}\nŞirket: ${company || '-'}\nSektör: ${sector || '-'}\nBütçe: ${budget || '-'}\nZaman Hedefi: ${timeline || '-'}\n\nMesaj:\n${message}`,
      html: `
        <h3>Yeni İletişim Formu Mesajı</h3>
        <p><strong>Adı Soyadı:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Şirket:</strong> ${company || '-'}</p>
        <p><strong>Sektör:</strong> ${sector || '-'}</p>
        <p><strong>Bütçe:</strong> ${budget || '-'}</p>
        <p><strong>Zaman Hedefi:</strong> ${timeline || '-'}</p>
        <p><strong>Mesaj:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent to ${mailOptions.to}`);
    res.json({ success: true, message: 'Mesajınız başarıyla iletildi.' });

  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ 
      error: 'E-posta gönderilirken bir hata oluştu.', 
      details: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
