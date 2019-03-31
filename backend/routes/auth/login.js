const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/login', async (req, res) => {
  let jwt = 'sadsad';

  try {
    User.find({ email: req.body.email }, function (err, users) {
      if (err) return console.error(err);
      if (req.body.password === users.password) jwt = users.generateJWT();
    });

    res.json({ jwt });
    console.log('HELLO');
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
