const express = require('express');
const bodyParser = require('body-parser');
const signUpRoute = require('./routes/auth/sign-up');
const path = require('path');
const app = express();

/**
 * Read environment settings
 */
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

/**
 * Setup DB
 */
require('./modules/db');

/**
 * Setup necessary middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Auth routes
 */
app.use(signUpRoute);

/**
 * Start server
 */
app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server running at ${process.env.HOST}:${process.env.PORT}/`);
});
