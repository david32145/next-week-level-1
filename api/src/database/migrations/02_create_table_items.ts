import Knex from "knex"

export async function up(knex: Knex) {
  return knex.schema.createTable('items', function(builder) {
    builder.increments('id')
    builder.string("title")
      .notNullable()
    builder.string("image_url")
      .notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items')
}