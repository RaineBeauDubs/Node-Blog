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

router.get('/:id', async (req, res) => {
  try {
    const post = await db.getById(req.params.id);

    if (post) {
      res
        .status(200)
        .json(post)
    } else {
      res
        .status(404)
        .json({
          message: 'Post not found.'
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error retrieving post.'
      });
  }
});

router.post('/', async (req, res) => {
  try {
    const post = await db.insert(req.body);
    res
      .status(201)
      .json(post);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error adding this post.'
      });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      res
      .status(200)
      .json({
        message: 'This post has been deleted.'
      });
    } else {
      res
        .status(404)
        .json({
          message: 'This post could not be found.'
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error removing this post.'
      });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const post = await db.update(req.params.id, req.body);
    if (post) {
      res
        .status(200)
        .json(post);
    } else {
      res
        .status(404)
        .json({
          message: 'This post could not be found.'
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error updating this post.'
      });
  }
});

module.exports = router;