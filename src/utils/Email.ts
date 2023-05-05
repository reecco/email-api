import nodemailer from "nodemailer";
import { config } from "dotenv";

import { TransporterMail, Mail, ResponseMail } from "../@types";

config();

class Email {
  private readonly user = process.env.USER_EMAIL;

  private transporter(): TransporterMail {
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

  public async send({ fromEmail, toEmail, name, text }: Mail): Promise<ResponseMail | undefined> {
    const transporter = this.transporter();

    if (!this.user)
      return;

    return await transporter.sendMail({
      from: `${name} <${this.user}>`,
      to: `${toEmail}`,
      subject: `${name} - ${fromEmail}`,
      text: `${text}`
    }).then(msg => msg)
      .catch(error => error);
  }
}

export default new Email();