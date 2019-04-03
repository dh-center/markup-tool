const express = require('express');
const router = express.Router();
const Entity = require('../models/entities/entity');

router.post('/entity', async (req, res) => {
  try {
    const newEntity = await Entity.create(req.body.name);

    res.json({ newEntity });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
