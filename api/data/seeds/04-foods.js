exports.seed = function(knex) {
  return knex('foods').insert([
    {
      food_name: 'pizza'
    },
    {
      food_name: 'burgers'
    },
    {
      food_name: 'wings'
    },
    {
      food_name: 'pot-stickers'
    },
    {
      food_name: 'dumplings'
    },
  ]);
};
