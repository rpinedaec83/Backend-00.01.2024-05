import { Course , ICourse } from '../models/Course';

export class CourseRepository {
    async create( courseData: ICourse): Promise<ICourse>{
        const course = new Course(courseData);
        return await course.save();
    }

    async findById(id: string): Promise<ICourse | null>{
        return await Course.findById(id);
    }

    async findAll(): Promise<ICourse[]>{
        return await Course.find();
    }

    async update(id: string, updateData: Partial<ICourse>): Promise <ICourse| null>{
        return await Course.findByIdAndUpdate(id, updateData, {new: true});
    }

    async delete(id: string): Promise <ICourse| null>{
        return await Course.findByIdAndDelete(id);
    }
};