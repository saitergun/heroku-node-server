const { createServer } = require('http')
const path = require('path')
const cors = require('cors')
const express = require('express')
const uuid = require('uuid')

const app = express()
const server = createServer(app)

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
  res.json()
})

app.get('/helo', async (req, res) => {
  res.json(['helö', uuid.v4()])
})

server.listen(process.env.SERVER_PORT || 3001, '0.0.0.0', () => {
  console.log('Server is running...')
})
