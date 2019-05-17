
// Import dependencies
const express = require('express');
const path = require('path');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


/*
 * Setup database
 *
 */
require('./bootstrap/db');



/*
 * Setup middlewares
 *
 */
require('./middleware')(app);



/*
 * Application Routes
 *
 */
require('./routes')(app);



/*
 * Error handler middleware
 *
 */
require('./services/errorHandler')(app);



module.exports = app;
