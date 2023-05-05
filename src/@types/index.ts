import { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export type TransporterMail = Transporter<SMTPTransport.SentMessageInfo>;

export interface Mail {
  fromEmail: string;
  toEmail: string;
  name: string;
  text: string;
};

export interface ResponseMail {
  accepted: [],
  rejected: [],
  response: string,
  responseCode: number,
  envelope: {
    from: string,
    to: []
  },
  messageId: string
}