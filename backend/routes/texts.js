const express = require('express');
const router = express.Router();
const Text = require('../models/text');

router.get('/texts', async (req, res) => {
  try {
    const data = await Text.find();

    console.log(data);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
});

module.exports = router;
