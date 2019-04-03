const express = require('express');
const router = express.Router();
const Entity = require('../models/entities/entity');

router.post('/entity', async (req, res) => {
  try {
    // const newEntity = await Entity(req.body.name);
    const newEntity = new Entity({
      'name': req.body.name
    });
    const saveEntity = await newEntity.save();

    res.json({ newEntity: req.body.name });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
