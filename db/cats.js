var Knex = require('knex')
var config = require('../knexfile').development
var knex = Knex(config)

module.exports = {
  getAllCats
}

function getAllCats() {
  return knex('cats')
}
