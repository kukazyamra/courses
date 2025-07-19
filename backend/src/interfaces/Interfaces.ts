
// Интерфейс для таблицы users
export interface User {
    id?: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    role_id: number;
}

// Интерфейс для таблицы courses
export interface Course {
    id?: number;
    name: string;
    description: string;
    image?: string
    author_id: number;
}

// Интерфейс для таблицы enrollments (связь many-to-many между users и courses)
export interface Enrollment {
    user_id: number;
    course_id: number;
}

// Интерфейс для таблицы course_tag (связь many-to-many между courses и tags)
export interface CourseTag {
    course_id: number;
    tag_id: number;
}

// Интерфейс для таблицы lessons
export interface Lesson {
    id?: number;
    name: string;
    text: string;
    video?: string;
    course_id: number;
}

// Интерфейс для таблицы roles
export interface Role {
    id?: number;
    name: string;
}

// Интерфейс для таблицы tags
export interface Tag {
    id?: number;
    name: string;
}

// Дополнительные интерфейсы для связей

export interface UserWithRole extends User {
    role?: Role;
}

export interface CourseWithAuthor extends Course {
    author?: User;
}

export interface CourseWithTags extends Course {
    tags?: Tag[];
}

export interface LessonWithCourse extends Lesson {
    course?: Course;
}

export interface EnrollmentWithDetails extends Enrollment {
    user?: User;
    course?: Course;
}