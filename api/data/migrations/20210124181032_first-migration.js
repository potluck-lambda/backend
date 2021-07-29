exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable("potlucks", (tbl) => {
      tbl.increments("potluck_id");
      tbl
        .integer("organizer_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.date("date").notNullable();
      tbl.time("time").notNullable();
      tbl.integer("street_number").notNullable();
      tbl.string("street_name").notNullable();
      tbl.string("state").notNullable();
      tbl.integer("zip_code").notNullable();
    })
    .createTable("users_potlucks", (tbl) => {
      tbl.increments("user_potluck_id");
      tbl
        .integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potluck_id")
        .inTable("potlucks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      // tbl.boolean('RSVP')
    })
    .createTable("foods", (tbl) => {
      tbl.increments("food_id");
      tbl.string("food_name").notNullable();
    })
    .createTable("potluck_food", (tbl) => {
      tbl.increments("potluck-food_id");
      tbl
        .integer("user_id")
        .unsigned()
        // .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potluck_id")
        .inTable("potlucks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("food_id")
        .unsigned()
        .notNullable()
        .references("food_id")
        .inTable("foods")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("potluck_food");
  // await knex.schema.dropTableIfExists("food-potluck");
  await knex.schema.dropTableIfExists("foods");
  await knex.schema.dropTableIfExists("users_potlucks");
  await knex.schema.dropTableIfExists("potlucks");
  await knex.schema.dropTableIfExists("users");
};
