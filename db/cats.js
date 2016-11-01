var Knex = require('knex')
var config = require('../knexfile').development
var knex = Knex(config)

module.exports = {
  getAllCats,
  getCatById,
  createNewCat,
  updateCat
}

function getAllCats() {
  return knex('cats')
}

function getCatById(id) {
  return knex('cats').where('id', id)
}

function createNewCat(catObject){
  return knex('cats').insert(catObject)
}

function updateCat(catObject) {
  return knex('cats').where('id', catObject.id).update(catObject)
}
