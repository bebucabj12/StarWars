"use strcit"

var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/people', function (req, res) {
  res.render('people');
});
app.get('/planets', function (req, res) {
  res.render('planets');
});
app.get('/starships', function (req, res) {
  res.render('starships');
});
app.get('/contacto', function (req, res) {
  res.render('contacto');
});
app.listen(3900, function () {
  console.log('Example app listening on port 3900!');
});

