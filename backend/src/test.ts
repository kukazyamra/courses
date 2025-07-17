import knex from 'knex';
import config from '../knexfile';


// Use the development config
const db = knex(config.development);

// Test the connection
db('roles').then(
    data => console.log(data)
);
