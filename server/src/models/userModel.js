import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
});
