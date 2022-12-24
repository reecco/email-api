import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

class Email {
  async send(fromEmail: string,  toEmail: string, name: string, text: string) {
    const user = process.env.USER_EMAIL;
    const pass = process.env.PASS_EMAIL;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass,
      },
    });

    return await transporter.sendMail({
      from: `${name} <${user}>`,
      to: `${toEmail}`,
      subject: `${name} - ${fromEmail}`,
      html: `<h3>${text}</h3>`,
      text: `${text}`
    }).then((msg) => msg)
      .catch((error) => error);
  }
}

export default new Email();