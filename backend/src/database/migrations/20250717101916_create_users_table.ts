import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary();

        table.string('name').notNullable();
        table.string('surname').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.timestamps(true, true);
        table.integer('role_id').references('id').inTable('roles').onDelete('RESTRICT');

    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users');

}
