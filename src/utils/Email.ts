import nodemailer from 'nodemailer';
import { config } from "dotenv";

config();

type Mail = {
  fromEmail: string,
  toEmail: string,
  name: string,
  text: string
};

class Email {
  user = String(process.env.USER_EMAIL);

  private transporter() {
    const pass = process.env.PASS_EMAIL;

    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: this.user,
        pass: pass,
      },
    })
  }

  public async send({ fromEmail, toEmail, name, text }: Mail) {
    const transporter = this.transporter();

    return await transporter.sendMail({
      from: `${name} <${this.user}>`,
      to: `${toEmail}`,
      subject: `${name} - ${fromEmail}`,
      html: `<h3>${text}</h3>`,
      text: `${text}`
    }).then(msg => msg)
      .catch(error => error);
  }
}

export default new Email();