import { UserRepository } from '../repositories/UserRepository';
import { IUser } from '../models/User';
import { hashPassword, verifyPassword } from '../utils/cryptoUtils';
import { generateJwt } from '../utils/jwtUtils';

export class AuthService { 
    private userRepository: UserRepository;
    private jwtSecret: string;

    constructor() {
        this.userRepository = new UserRepository();
        this.jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';
    }

    async register(userData: Partial<IUser>): Promise<IUser> {
        const { password, ...rest } = userData;
        const hashedPassword = hashPassword(password!);
        const newUser = await this.userRepository.create({
            ...rest,
            password: hashedPassword,
        } as IUser);
        return newUser;
    }

    async login(email: string, password: string): Promise<{ user: IUser; token: string }> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = verifyPassword(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        const token = generateJwt({ id: user._id, email: user.email }, this.jwtSecret);
        return { user, token };
    }
}
