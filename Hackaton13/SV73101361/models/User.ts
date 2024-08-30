import {Schema, model, Document} from 'mongoose';

export interface IUser extends Document {
    name: string,
    email: string,
    password: string;
    role: 'student' | 'admin';
    createAt: Date;
    updateAt: Date;
}

const userSchema = new Schema<IUser>({
name: {type: String, required: true},
email: { type: String, required: true , unique: true},
password: {type: String, required: true},
role:{type: String, enum: ['student', 'admin'], default: 'student'}
},{ timestamps : true});

export const User = model<IUser>('User', userSchema)
