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

router.get('/:id/', function(req, res){
  // console.log('This is req.params.id', req.params.id);
  catsDB.getCatById(Number(req.params.id))
    .then(function(catsFromDB){
      console.log(catsFromDB[0]);
      res.render('showCat', catsFromDB[0])
    })
    .catch(function(error){
      console.log(error);
    })
})

module.exports = router;
