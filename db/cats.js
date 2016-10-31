var Knex = require('knex')
var config = require('../knexfile').development
var knex = Knex(config)

module.exports = {
  getAllCats,
  getCatById
}

function getAllCats() {
  return knex('cats')
}

function getCatById(id) {
  return knex('cats').where('id', id)
}
