import Knex from "knex"

export async function up(knex: Knex) {
  return knex.schema.createTable('points', function(builder) {
    builder.increments('id')
    builder.string("name", 30)
      .notNullable()
    builder.string("email", 50)
      .notNullable()
    builder.string("whatsapp", 50)
      .notNullable()
    builder.decimal("latitude")
      .notNullable()
    builder.decimal("logitude")
      .notNullable()
    builder.string("city", 40)
      .notNullable()
    builder.string("uf", 2)
      .notNullable()
    builder.string("image_url")
      .notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('points')
}