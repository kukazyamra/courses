import knex from 'knex';

import config from "../knexfile.js";


// Подключение к БД (используем конфиг для development)
const db = knex(config.development);

// Проверка подключения
db.raw('SELECT 1')
  .then(() => console.log('PostgreSQL connected!'))
  .catch((err) => console.error('Connection failed:', err));


  
