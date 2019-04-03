const express = require('express');
const router = express.Router();
const Text = require('../../models/text');
const mongoose = require('mongoose');

router.get('/texts', async (req, res) => {
  try {
    const data = await Text.find();

    res.json({ data });
  } catch (error) {
    res.json({ error });
  }
});

router.get('/texts/:textId', async (req, res) => {
  try {
    const text = await Text.findById(req.params.textId);

    res.json({ data: text });
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      res.json({ error: 'Invalid id' });
    }

    res.json({ error });
  }
});

module.exports = router;
