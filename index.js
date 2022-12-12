import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import router from './src/routes.js'

const app = express()
const port = process.env.PORT || 9595

app.use(express.json())

app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", 'https://reecco-djg1r0fw8-fredericorecco.vercel.app/')
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST')
  app.use(cors())
  next()
})

app.use('/', router)

dotenv.config()

app.listen(port, () => {
  console.log(`Server open in \nhttp://localhost:${port}`)
})