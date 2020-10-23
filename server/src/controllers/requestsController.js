import { Request } from '../models';
import { User } from '../models';

export const createRequest = async (req, res) => {
    console.log('API: called createRequest');
    const requestData = {
        sender: req.body.sender,
        receiver: req.body.receiver,
        status: 'sent',
    };

    const newRequest = new Request(requestData);
    try {
        const request = await newRequest.save();
        return res.status(201).json(request._id);
    } catch (err) {
        return res.status(400).json({
            error: {
                message: err.message,
                type: 'CreateRequest Error',
                code: 400,
            },
        });
    }
};

export const acceptRequest = async (req, res) => {
    console.log('API: called acceptRequest');

    const { requestId } = req.params;
    try {
        const request = await Request.findById(requestId);
        const sender = await User.findOne({ email: request.sender });
        const receiver = await User.findOne({ email: request.receiver });
        await sender.updateOne({ $push: { contacts: receiver._id } });
        await receiver.updateOne({ $push: { contacts: sender._id } });
        await Request.deleteOne({ _id: request._id });
        return res.status(200).end();
    } catch (err) {
        return res.status(400).json({
            error: {
                message: err.message,
                type: 'AcceptRequest Error',
                code: 400,
            },
        });
    }
};

export const cancelRequest = async (req, res) => {
    console.log('API: called cancelRequest');

    const { requestId } = req.params;
    try {
        await Request.deleteOne({ _id: requestId });
        res.status(200).end();
    } catch (err) {
        res.status(400).json({
            error: {
                message: err.message,
                type: 'CancelRequest Error',
                code: 400,
            },
        });
    }
};

export const getSentRequests = async (req, res) => {
    console.log('API: called getSentRequests');

    const { email } = req.params;
    try {
        const user = await User.findOne({ email });
        const requests = await Request.find({ sender: user.email }).select({
            receiver: 1,
        });
        return res.status(200).json(requests);
    } catch (err) {
        return res.status(400).json({
            error: {
                message: err.message,
                type: 'GetSentRequests Error',
                code: 400,
            },
        });
    }
};

export const getReceivedRequests = async (req, res) => {
    console.log('API: called getReceivedRequests');

    const { email } = req.params;
    try {
        const user = await User.findOne({ email });
        const requests = await Request.find({ receiver: user.email }).select({
            sender: 1,
        });

        return res.status(200).json(requests);
    } catch (err) {
        return res.status(400).json({
            error: {
                message: err.message,
                type: 'GetReceivedRequests Error',
                code: 400,
            },
        });
    }
};

export const getContacts = async (req, res) => {
    console.log('API: called getContacts');

    const { userId } = req.params;
    try {
        const contacts = await User.findById(userId)
            .populate('contacts', 'firstName lastName email')
            .select({ contacts: 1 });
        return res.status(200).json(contacts);
    } catch (err) {
        return res.status(400).json({
            error: {
                message: err.message,
                type: 'GetContacts Error',
                code: 400,
            },
        });
    }
};
