import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('courses', (table) => {
        table.increments('id').primary();

        table.string('name').notNullable();
        table.text('description').notNullable();
        table.string('image').nullable();
        table.timestamps(true, true);
        table.integer('author_id').references('id').inTable('users').onDelete('RESTRICT');

    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('courses');

}
