const path = require('path')
const express = require('express')

const tarotRoutes = require('./tarot')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', tarotRoutes)

module.exports = server
