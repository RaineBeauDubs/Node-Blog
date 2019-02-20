const express = require('express');

const db = require('./data/helpers/userDb');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await db.get();
    res
      .status(200)
      .json(users);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error retrieving users.'
      });
  }
});

module.exports = router;