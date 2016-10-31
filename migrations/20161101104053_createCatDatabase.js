
exports.up = function(knex, Promise) {
  console.log("Initial table creation")

  return knex.schema.createTableIfNotExists("cats", function(table) {
    table.increments('id')
    table.string('name')
    table.string('url')
    table.text('story')
    table.integer('lives')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats').then(function() {
    console.log("Cats table dropped");
  })
}
