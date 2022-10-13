const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

// Middleware handle form submit
app.use(express.urlencoded({ extended: true }));

// Middleware handle Javascript send to server
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});