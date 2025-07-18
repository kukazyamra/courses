import type { Knex } from 'knex';
import './src/utils/load-env';
import * as process from "node:process";

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: parseInt(process.env.DB_PORT || '8080'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds'
    },
  },

};

export = knexConfig;