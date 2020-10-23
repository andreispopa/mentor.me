import { User } from '../models';

export const createAccount = async (req, res) => {
    console.log('API: called createAccount');

    const newUser = new User(req.body);
    try {
        const user = await newUser.save();
        return res.status(201).json(user);
    } catch (err) {
        return res.status(400).send({
            error: {
                message: err.message,
                type: 'CreateAccount Error',
                code: 400,
            },
        });
    }
};
