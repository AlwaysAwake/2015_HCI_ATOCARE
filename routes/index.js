var express = require('express');
var router = express.Router();

exports.view = function(req, res, next) {
  res.render('index', { title: 'ATOCARE', backbutton: false } );
};
