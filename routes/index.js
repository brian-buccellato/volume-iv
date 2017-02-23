var express = require('express');
//var mongoose = require('mongoose');
var router = express.Router();

//mongoose.connect('mongodb://localhost/my_db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
