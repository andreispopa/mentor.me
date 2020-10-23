import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
    contacts: [{ type: String, ref: 'User' }],
});

export const User = mongoose.model('User', UserSchema);
