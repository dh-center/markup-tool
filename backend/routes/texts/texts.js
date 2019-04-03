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
router.get('/texts/:textId', async (req, res) => {
  try {
    const textId = req.params.textId;

    const text = await Text.findOne({ _id: textId });

    if (!text) return res.json({ error: 'No text with such textID' });

    res.json({ data: text });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
