const express = require('express');
const router = express.Router();
const Text = require('../../models/text');

router.get('/texts', async (req, res) => {
  try {
    const data = await Text.find();

    res.json({ data });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
