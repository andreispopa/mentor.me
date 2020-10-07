import mongoose from 'mongoose';
import { UserSchema } from '../models';

const User = mongoose.model('User', UserSchema);

export const createAccount = async (req, res) => {
    const newUser = new User(req.body);

    try {
        await newUser.save();
        return res.json(user);
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};
