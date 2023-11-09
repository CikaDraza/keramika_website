const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/contact', (req, res) => {
  const data = req.body; // Podaci koje ste poslali sa frontenda
  console.log(data);
  // Obrada podataka i vraćanje odgovora na front
  res.json({ message: 'Podaci su primljeni i obradjeni na serveru.', data: data});
});

app.listen(5000, () => {
  console.log('Server je pokrenut na portu 5000');
});

// const nodemailer = require('nodemailer');

// // Konfiguracija Nodemailer-a za Amazon SES SMTP endpoint
// const transporter = nodemailer.createTransport({
//     host: 'email-smtp.eu-central-1.amazonaws.com',
//     port: 587, // Možete takođe koristiti 465 za TLS Wrapper
//     secure: false, // Postavite na true ako koristite port 465
//     auth: {
//         user: '',
//         pass: '',
//     },
// });

// // Email opcije (od, do, predmet, tekst poruke, HTML poruka)
// const mailOptions = {
//     from: 'your-email@example.com',
//     to: 'recipient@example.com',
//     subject: 'Subject',
//     text: 'Email body (plain text)',
//     html: '<p>Email body (HTML)</p>',
// };

// // Slanje e-mail poruke
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });
