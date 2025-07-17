import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('test_result', (table) => {

        table.timestamps(true, true);
        table.integer('student_id').references('id').inTable('users').onDelete('RESTRICT');
        table.integer('lesson_id').references('id').inTable('lessons').onDelete('RESTRICT');
        table.primary(["student_id", "lesson_id"]);
        table.decimal('correct_percentage')
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('test_result');

}
