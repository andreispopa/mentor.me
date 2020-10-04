import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    email: String,
});
