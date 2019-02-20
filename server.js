const express = require('express');

const postRouter = require('./post-router');
const userRouter = require('./user-router');

const server = express();

server.use(express.json());

server.use('/api/posts', postRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res, next) => {
  res.send(`
    <h1>Welcome to Node Blog!</h1>
  `);
});

module.exports = server;