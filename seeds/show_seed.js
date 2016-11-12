
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shows').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shows').insert({name: 'Suits', channel: 'USA Network', genre: 'Drama', rating: 3, explicit: false}),
        knex('shows').insert({name: 'Game of Thrones', channel: 'HBO', genre: 'Fantasy', rating: 4, explicit: true}),
        knex('shows').insert({name: 'South Park', channel: 'Comedy Central', genre: 'Comedy', rating: 5, explicit: true}),
        knex('shows').insert({name: 'Mad men', channel: 'AMC', genre: 'Drama', rating: 2, explicit: false})
      ]);
    });
};
