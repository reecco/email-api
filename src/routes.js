import expresss from 'express'
import dotenv from 'dotenv'

import Email from './email.js'

dotenv.config()

const router = expresss.Router()

const tokenSys = process.env.TOKEN

router.get('/', (req, res) => {
  try {
    res.status(200).json({ message: "Sending email with API", status: 200 })
  } catch (error) {
    res.status(404).json({ message: 'Server error', status: 404 })
  }
})

router.post('/', async (req, res) => {
  let token = req.body.token

  let email = req.body.fromEmail
  let name = req.body.name
  let text = req.body.text

  if (!(token == tokenSys)) {
    res.status(401).json({ message: 'Invalid password', status: 401 })
  } else {
    let sendEmail = await Email.send(email, name, text)

    let status = sendEmail.response.replace(/ .*/, '')

    if (!(status == '250')) {
      res.status(500).json({ message: 'There was an error sending the email', status: 500 })
    } else {
      res.status(201).json({ message: 'Email successfully sent', status: 201 })
    }
  }
})

export default router