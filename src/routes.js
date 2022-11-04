import expresss from 'express'
import dotenv from 'dotenv'

import Email from './sendEmail.js'

dotenv.config()

const router = expresss.Router()

const passwordSys = process.env.PASSWORD

router.get("/", (req, res) => {
  try {
    res.json({ message: "Welcome", status: 200 })
  } catch (error) {
    res.status(500).send("Server error");
  }
})

router.post('/', (req, res) => {
  let password = req.body.password

  if (!password == passwordSys) {
    res.status(400).json({ message: 'Deu ruim', status: 400 })
  } else {
    let sendEmail = Email.send()
    res.status(200).json({ message: sendEmail, status: 200 })
  }
})

export default router