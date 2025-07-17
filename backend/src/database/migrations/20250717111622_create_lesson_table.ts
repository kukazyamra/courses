
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('lessons', (table) => {
        table.increments('id').primary();

        table.string('name').notNullable();
        table.text('text').notNullable();
        table.string('video').nullable();

        table.timestamps(true, true);
        table.integer('course_id').references('id').inTable('courses').onDelete('RESTRICT');

    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('lessons');

}
