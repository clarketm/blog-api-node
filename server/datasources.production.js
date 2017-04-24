module.exports = {
  transient: {
    name: "transient",
    connector: "transient"
  },
  mongodb: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connector: "mongodb"
  },
  redis: {
    host: process.env.CACHE_HOST,
    port: process.env.CACHE_PORT,
    user: process.env.CACHE_USER,
    password: process.env.CACHE_PASSWORD,
    db: process.env.DB_NAME,
    connector: "kv-redis"
  }
};
