// implement your server here
const express = require('express')

const server = express()

server.use(express.json())

// require your posts router and connect it here
const router = require('./posts/posts-router')

server.use('/api/posts', router)

server.get('/', (req, res) => {
    res.send(`<h1> Welcome to the Posts API Server </h1>`)
})

module.exports = server