const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.post('/sign-up', (req, res) => {
  const newUser = User.create(req.body.email, req.body.password);
  res.end();
});

module.exports = router;
