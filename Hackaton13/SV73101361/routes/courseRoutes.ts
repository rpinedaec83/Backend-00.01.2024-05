import { Router } from 'express';
import { CourseController } from '../controllers/CourseController';
import { authMiddleWare } from '../middlewares/authMiddleware';

const router = Router();
const courseController = new CourseController();

router.post('/', authMiddleWare , courseController.createCourse.bind(courseController));
router.get('/:id', courseController.getCourseById.bind(courseController));
router.get('/', courseController.getAllCourses.bind(courseController));
router.put('/:id', authMiddleWare, courseController.updateCourse.bind(courseController));
router.delete('/:id', authMiddleWare, courseController.deleteCourse.bind(courseController));

export default router;