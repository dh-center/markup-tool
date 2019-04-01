const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/login', async (req, res) => {
  try {
    User.findOne({ email: req.body.email }, async function (err, user) {
      if (err) return console.error(err);
      const compareResult = await user.comparePassword(req.body.password);

      if (compareResult) res.json({ jwt: user.generateJWT() });
    });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
