var express = require('express');
var router = express.Router();
var catsDB = require('../db/cats')

router.get('/', function(req, res, next) {
  catsDB.getAllCats()
    .then(function(catsFromDB){
      res.render('cats', { cats: catsFromDB })
    })
    .catch(function(error){
      res.status(500)
      console.log(error);
    })
});

module.exports = router;
