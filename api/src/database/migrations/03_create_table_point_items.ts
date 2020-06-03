import Knex from "knex"

export async function up(knex: Knex) {
  return knex.schema.createTable('point_items', function(builder) {
    builder.increments('id')
    builder.integer("point_id")
      .unsigned()
      .notNullable()
      .references("id")
        .inTable("points")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    builder.integer("item_id")
      .unsigned()
      .notNullable()
      .references("id")
        .inTable("items")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items')
}