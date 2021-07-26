exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable("roles", (roles) => {
      roles.increments("role_id");
      roles.string("role_type").notNullable().defaultTo("guest");
    })
    .createTable("user_roles", (userRoles) => {
      userRoles.increments("userRole_id");
      userRoles
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("role_id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      userRoles
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("user_roles");
  await knex.schema.dropTableIfExists("roles");
  await knex.schema.dropTableIfExists("users");
};
