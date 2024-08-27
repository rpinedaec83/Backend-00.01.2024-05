import { CourseRepository } from '../repositories/CourseRepository';
import { ICourse } from '../models/Course';

export class CourseService {
    private courseRepository: CourseRepository;

    constructor() {
        this.courseRepository = new CourseRepository();
    }

    async createCourse(courseData: Partial<ICourse>): Promise<ICourse> {
        // Validar que todas las propiedades necesarias están presentes
        if (!courseData.name || !courseData.description || !courseData.image || courseData.price === undefined) {
            throw new Error('Missing required fields');
        }

        return await this.courseRepository.create(courseData as ICourse);
    }

    async getCourseById(id: string): Promise<ICourse | null> {
        return await this.courseRepository.findById(id);
    }

    async getAllCourses(): Promise<ICourse[]> {
        return await this.courseRepository.findAll();
    }

    async updateCourse(id: string, updateData: Partial<ICourse>): Promise<ICourse | null> {
        return await this.courseRepository.update(id, updateData);
    }

    async deleteCourse(id: string): Promise<ICourse | null> {
        return await this.courseRepository.delete(id);
    }
}
