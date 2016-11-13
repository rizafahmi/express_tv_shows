// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'tv_shows_dev'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/db/migrations/'
    },
    seed: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'tv_shows_test',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/db/migrations/'
    },
    seed: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'tv_shows',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/db/migrations/'
    },
    seed: {
      directory: __dirname + '/db/seeds/production'
    }
  }

};
