import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('enrollments', (table) => {

        table.timestamps(true, true);
        table.integer('user_id').references('id').inTable('users').onDelete('RESTRICT');
        table.integer('course_id').references('id').inTable('courses').onDelete('RESTRICT');
        table.primary(["user_id", "course_id"]);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('enrollments');

}
