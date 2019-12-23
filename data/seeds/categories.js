
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, category_name: 'Account Help'},
        {id: 2, category_name: 'Vanilla Javascript'},
        {id: 3, category_name: 'React'},
        {id: 4, category_name: 'Swift'},
        {id: 5, category_name: 'Java'},
        {id: 6, category_name: 'Python'},
      ]);
    });
};
