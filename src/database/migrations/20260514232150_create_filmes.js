/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("filmes", (table) => {
    table.increments("id").primary()
    table.string("titulo").notNullable()

    table.integer("genero_id")
        .unsigned()
        .references("id")
        .inTable("generos")
        
    table.integer("diretor_id")
        .unsigned()
        .references("id")
        .inTable("diretores")

    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("filmes")
};
