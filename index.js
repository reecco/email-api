import express from 'express'
import dotenv from 'dotenv'

import router from './src/routes.js'

const app = express()
const port = process.env.PORT || 9595

dotenv.config()

app.listen(port, () => {
  console.log(`Servidor aberto em \nhttp://localhost:${port}`)
})

app.use(express.json())

app.use('/', router)