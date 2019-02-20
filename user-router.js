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

router.get('/:id', async (req, res) => {
  try {
    const user = await db.getById(req.params.id);

    if (user) {
      res
        .status(200)
        .json(user)
    } else {
      res
        .status(404)
        .json({
          message: 'User not found.'
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error retrieving user.'
      });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await db.insert(req.body);
    res
      .status(201)
      .json(user);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error adding this user.'
      });
  }
});

module.exports = router;