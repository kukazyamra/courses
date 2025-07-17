import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('course_tag', (table) => {

        table.timestamps(true, true);
        table.integer('tag_id').references('id').inTable('tags').onDelete('RESTRICT');
        table.integer('course_id').references('id').inTable('courses').onDelete('RESTRICT');
        table.primary(["course_id", "tag_id"]);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('course_tag');

}
