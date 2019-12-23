
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, category_name: 'Vanilla Javascript'},
        {id: 2, category_name: 'React'},
        {id: 3, category_name: 'Swift'},
        {id: 4, category_name: 'Java'},
        {id: 5, category_name: 'Python'},
      ]);
    });
};
