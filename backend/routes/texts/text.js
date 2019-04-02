const express = require('express');
const router = express.Router();
const Text = require('../../models/text');

router.get('/texts/:textId/markup', async (req, res) => {
  try {
    const textId = req.params.textId;

    await Text.findOne({
      _id: textId
    }, async function (err, text) {
      if (err) {
        return console.error(err);
      } else {
        res.json({ data: text });
      }
    });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
