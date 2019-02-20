const express = require('express');

const db = require('./data/helpers/postDb');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await db.get();
    res
      .status(200)
      .json(posts);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error retrieving posts.'
      });
  }
});

module.exports = router;