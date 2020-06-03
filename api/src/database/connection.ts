import knex from "knex"

const Database = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port: 13306,
    user : 'root',
    password : 'root',
    database : 'next_level_week'
  }
})

export default Database