const express = require('express');

const postRouter = require('./post-router');
const userRouter = require('./user-router');

const server = express();

// function upperCase (req, res, next) {
//   const user = req.body.name;
//   req.body.name = user.toLowerCase()
//   .split('')
//   .map((foo) => foo.charAt(0).toUpperCase() + foo.substring(1))
//   .join('');
//   next();
// };

server.use(express.json());
// server.use(upperCase);

server.use('/api/posts', postRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res, next) => {
  res.send(`
    <h1>Welcome to Node Blog!</h1>
  `);
});

module.exports = server;