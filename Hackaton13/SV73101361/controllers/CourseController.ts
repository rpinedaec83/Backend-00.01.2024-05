import { Request, Response } from 'express';
import { CourseService } from '../services/CourseService';

export class CourseController {
    private courseService: CourseService;

    constructor() {
        this.courseService = new CourseService();
    }

    async createCourse(req: Request, res: Response): Promise<void> {
        try {
            const course = await this.courseService.createCourse(req.body);
            res.status(201).json(course);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async getCourseById(req: Request, res: Response): Promise<void> {
        try {
            const course = await this.courseService.getCourseById(req.params.id);
            if (course) {
                res.status(200).json(course);
            } else {
                res.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async getAllCourses(req: Request, res: Response): Promise<void> {
        try {
            const courses = await this.courseService.getAllCourses();
            res.status(200).json(courses);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async updateCourse(req: Request, res: Response): Promise<void> {
        try {
            const course = await this.courseService.updateCourse(req.params.id, req.body);
            if (course) {
                res.status(200).json(course);
            } else {
                res.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async deleteCourse(req: Request, res: Response): Promise<void> {
        try {
            const course = await this.courseService.deleteCourse(req.params.id);
            if (course) {
                res.status(200).json({ message: 'Course deleted successfully' });
            } else {
                res.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }
}
