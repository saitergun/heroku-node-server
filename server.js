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

const server_port = process.env.YOUR_PORT || process.env.PORT || 80;
const server_host = process.env.YOUR_HOST || '0.0.0.0';

server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
