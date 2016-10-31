
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'Mordecai', url: 'https://placekitten.com/300/200', story: "I live next door to Katherine", lives: 100}),
        knex('cats').insert({id: 2, name: 'Oliver', url: 'https://placekitten.com/300/200', story: "I'm a crazy cat (gato loco)", lives: 100}),
        knex('cats').insert({id: 3, name: 'Harry', url: 'https://placekitten.com/300/200', story: "I live in Auckland", lives: 100})
      ]);
    });
};
