import {Schema, model, Document } from 'mongoose';

export interface ICourse extends Document {
    name: string, 
    description: string, 
    image: string,
    price: number,
    createAt: Date,
    updateAt: Date,
}

const courseSchema = new Schema<ICourse>({
name: {type: String, required: true},
description: {type: String, required: true},
image: {type: String },
price: { type: Number, required: true},
},{ timestamps: true})

export const Course = model<ICourse>('Course', courseSchema);