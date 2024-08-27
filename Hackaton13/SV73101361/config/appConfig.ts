import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/test',
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default appConfig;
