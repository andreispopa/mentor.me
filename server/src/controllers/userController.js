import mongoose from 'mongoose';
import { UserSchema } from '../models';

const User = mongoose.model('User', UserSchema);

export const createAccount = (req, res) => {
    const newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.status(400).send({ message: err });
        } else {
            return res.json(user);
        }
    });
};
