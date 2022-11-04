import dotenv from 'dotenv'

dotenv.config()

const key = process.env.KEY

export default class Email {
  static send() {
    return key
  }
}