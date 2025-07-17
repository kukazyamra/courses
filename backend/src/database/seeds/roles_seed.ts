import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("enrollments").del();
    await knex("lessons").del();
    await knex("course_tag").del();

    await knex("courses").del();
    await knex("users").del();
    await knex("roles").del();
    await knex("tags").del();

    await knex("roles").insert([
        { id: 1, name:'admin'},
        { id: 2, name:'student' },
        { id: 3, name: "author" }
    ]);

    await knex("tags").insert([
        { id: 1, name:'Языки'},
        { id: 2, name:'Маркетинг' },
        { id: 3, name: "IT" }
    ]);

    await knex("users").insert([
        { id: 1, name:'Иван',surname:'Петров', role_id:2, email:'test@yandex.ru',password:'qwerty1234'},
        { id: 2, name:'Олег',surname:'Кашин', role_id:3, email:'oleg@gmail.com',password:'qwerty1234'}
    ]);

    await knex("courses").insert([
        { id: 1, name:'Маркетинг для начинающих',author_id:2, description:'Курс «Маркетинг для начинающих» — это практическое введение в основы маркетинга. Ты узнаешь, как анализировать рынок, определять целевую аудиторию, создавать эффективные рекламные кампании и продвигать продукты или услуги. Идеально подходит для тех, кто хочет освоить базовые навыки маркетинга с нуля и применить их на практике.\n' },
    ]);

    await knex("enrollments").insert([
        {course_id:1, user_id:1}
    ]);

    await knex("course_tag").insert([
        {course_id:1, tag_id:2}
    ]);

    await knex("lessons").insert([
        {id:1, course_id:1, name:'Введение в маркетинг', text:'Маркетинг — это не просто реклама или продажи. Это системный подход к изучению потребностей клиентов и созданию ценности, которая решает их задачи. Он охватывает всё: от анализа рынка и поведения аудитории до разработки продукта, ценообразования, продвижения и построения долгосрочных отношений с клиентами'}
    ]);
};
