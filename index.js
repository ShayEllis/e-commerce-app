import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
// Create an express app and set port number.
const app = express()
const port = process.env.PORT || 3000
// Import environment variables from .env file.
dotenv.config()
// Setup body-parser
app.use(bodyParser.json())
// Setup cors
app.use(cors())

app.get('/', (req, res) => {
  res.send(process.env.HELLO_MESSAGE)
})

app.listen(port, () => {
  console.log(`E-commerce app is listening on port ${port}.`)
})