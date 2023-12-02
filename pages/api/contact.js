import { createRouter } from 'next-connect';
import nodemailer from 'nodemailer';

const router = createRouter();

router.post(async (req, res) => {
  const data = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: proces.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const htmlBody = `
    <html>
      <body>
        <p>Ime: ${data.name}</p>
        <p>Prezime: ${data.last_name}</p>
        <p>E-mail: ${data.email}</p>
        <p>Telefon: ${data.phone}</p>
        <p>Subscription: ${data.subscribe === 'allowExtraEmails' ? 'Zelim da se pretplatim' : 'ne zelim da se pretplatim'}</p>
        <p style="font-weight: bold">Prostorije:</p>
        <ul> ${data.room.map(room => `<li key=${room}>${room}</li>`).join('')}
        </ul>
        <p>Poruka: ${data.message}</p>
        <table>
          <thead>
            <tr>
              <th colspan="2">Slike u prilogu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            ${data.image.map((image, index) => `
              <td>
                <img width="100" src="cid:image${index + 1}" alt="Slika ${index + 1}" />
              </td>
            `).join('')}
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `;

  const userMailOptions = {
    from: process.env.USER_ID,
    to: data.email,
    subject: 'Hvala vam sto ste nas kontaktirali',
    text: 'Hvala vam. Vaša poruka je primljena i odgovorićemo vam uskoro.',
    html: htmlBody,
    attachments: data.image.map((image, index) => ({
      filename: `slika_${index + 1}`,
      content: image.split(';base64,').pop(),
      encoding: 'base64',
      cid: `image${index + 1}`,
    })),
  };

  const mailOptions = {
    from: data.email,
    to: 'info@keramicar-lale.online',
    subject: `Nova Poruka od ${data.email}`,
    replyTo: data.email,
    html: htmlBody,
    attachments: data.image.map((image, index) => ({
      filename: `slika_${index + 1}`,
      content: image.split(';base64,').pop(),
      encoding: 'base64',
      cid: `image${index + 1}`,
    })),
  };

  try {
    await transporter.sendMail(userMailOptions);
    console.log('E-mail korisniku poslat');
  } catch (error) {
    console.error('Greška prilikom slanja e-maila korisniku:', error);
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-mail poslat');
    res.status(200).json({ message: 'Podaci su primljeni i obradjeni na serveru. E-mail je poslat.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Došlo je do greške prilikom slanja e-maila.' });
  }
});

export default router.handler();