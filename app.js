/**
 * Created by Flandre on 2017-03-29.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use("/lib", express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
  res.render('index', {title: 'Home Page'});
});

app.listen(3000, () => {
  console.log('ready')
});