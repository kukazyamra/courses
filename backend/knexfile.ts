import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg', 
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'admin',
      password: 'qwerty1234',
      database: 'courses'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './seeds'
    },
  },

};

export default config;