
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('questions', (table) => {
        table.increments('id').primary();

        table.text('text').notNullable();

        table.timestamps(true, true);
        table.integer('lesson_id').references('id').inTable('lessons').onDelete('RESTRICT');
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('questions');

}
