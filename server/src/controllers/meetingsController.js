import { Meeting } from '../models';

export const createMeeting = async (req, res) => {
    console.log('API: called createMeeting');
    const newMeeting = new Meeting(req.body);

    try {
        const meeting = await newMeeting.save();
        return res.status(201).json(meeting);
    } catch (err) {
        return res.status(400).send({
            error: {
                message: err.message,
                type: 'CreateMeeting Error',
                code: 400,
            },
        });
    }
};

export const getMeetings = async (req, res) => {
    console.log('API: called getMeetings');

    const { userId } = req.params;
    try {
        const meetingsOrganizedByMe = await Meeting.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'participant2',
                    foreignField: '_id',
                    as: 'participant',
                },
            },
            {
                $match: { participant1: `${userId}` },
            },
            {
                $unset: ['participant1', 'participant2'],
            },
        ]);

        const meetingsOrganizedByOthers = await Meeting.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'participant1',
                    foreignField: '_id',
                    as: 'participant',
                },
            },
            {
                $match: { participant2: userId },
            },
            {
                $unset: ['participant1', 'participant2'],
            },
        ]);

        const meetings = [
            ...meetingsOrganizedByMe,
            ...meetingsOrganizedByOthers,
        ];

        return res.status(200).json(meetings);
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: {
                message: err.message,
                type: 'GetMeetings Error',
                code: 400,
            },
        });
    }
};
