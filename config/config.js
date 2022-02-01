const config = {
  development: {
    dialect: "postgres",
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    schema: process.env.DATABASE_SCHEMA,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: false
  }
}

module.exports = config
