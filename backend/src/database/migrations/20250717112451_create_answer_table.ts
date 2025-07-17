
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('answers', (table) => {
        table.increments('id').primary();
        table.string('text').notNullable();
        table.boolean('is_correct').notNullable();
        table.integer('question_id').references('id').inTable('questions').onDelete('RESTRICT');
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('answers');

}
