import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import router from './src/routes.js'

const app = express()
const port = process.env.PORT || 9595

app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors())
  next()
})

app.use('/', router)

dotenv.config()

app.listen(port, () => {
  console.log(`Server open in \nhttp://localhost:${port}`)
})