import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const pass = process.env.PASS_EMAIL
const to = process.env.TO_EMAIL
const from = process.env.FROM_EMAIL

export default class Email {
  static send(fromEmail, name, text) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: from,
        pass: pass,
      },
    })

    let res = transporter.sendMail({
      from: `Contact Fred <${from}>`,
      to: `${to}`,
      subject: `${name} - ${fromEmail}`,
      html: `<p>${text}</p>`,
      text: `${text}`
    }).then((msg) => {
      return msg
    }).catch((error) => {
      return error
    })

    return res
  }
}