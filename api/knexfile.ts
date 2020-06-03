import path from "path"
module.exports = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port: 13306,
    user : 'root',
    password : 'root',
    database : 'next_level_week'
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations")
  }
}