import { UserRepository } from '../repositories/UserRepository';
import { IUser } from '../models/User';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUserById(id: string): Promise<IUser | null> {
        return await this.userRepository.findById(id);
    }

    async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
        return await this.userRepository.update(id, updateData);
    }

    async deleteUser(id: string): Promise<IUser | null> {
        return await this.userRepository.delete(id);
    }
}
