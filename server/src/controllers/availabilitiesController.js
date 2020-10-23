import { DateAvailability } from '../models';

export const createDateAvailability = async (req, res) => {
    console.log('API: called createDateAvailability');
    const dateAvailabilityData = {
        userId: req.body.id,
        date: req.body.date,
        times: req.body.times,
    };

    const newDateAvailability = new DateAvailability(dateAvailabilityData);

    try {
        const availability = await newDateAvailability.save();
        res.io.emit('newAvailability', {
            availability,
        });
        return res.status(201).json(availability);
    } catch (err) {
        return res.status(400).json({
            error: {
                message: err.message,
                type: 'CreateDateAvailability Error',
                code: 400,
            },
        });
    }
};

export const updateDateAvailability = async (req, res) => {
    console.log('API: called updateDateAvailabilities');
    const { userId, date } = req.params;
    const updatedTimes = sortTimes(req.body.times);
    let updatedAvailability = {};

    try {
        if (updatedTimes.length) {
            updatedAvailability = await DateAvailability.findOneAndUpdate(
                { userId, date },
                { $set: { times: req.body.times } },
                {
                    returnOriginal: false,
                    upsert: true,
                }
            );
            res.io.emit('newAvailability', {
                availability: updatedAvailability,
            });
        } else {
            updatedAvailability = await DateAvailability.deleteOne({
                userId,
                date,
            });
            res.io.emit('deletedAvailability', {
                deletedAvailability: {
                    userId,
                    date,
                },
            });
        }
        return res.status(200).json(updatedAvailability);
    } catch (err) {
        return res.status(400).json({
            error: {
                message: err.message,
                type: 'UpdateDateAvailability Error',
                code: 400,
            },
        });
    }
};

export const getDateAvailabilities = async (req, res) => {
    console.log('API: called getDateAvailabilities');

    const { userId } = req.params;
    try {
        const availabilities = await DateAvailability.find({
            userId,
        }).select({ _id: 0, times: 1, date: 1 });
        return res.status(200).json(availabilities);
    } catch (err) {
        return res.status(400).json({
            error: {
                message: err.message,
                type: 'GetDateAvailabilities Error',
                code: 400,
            },
        });
    }
};

const sortTimes = (times) => {
    times.sort((time1, time2) => {
        const ampm1 = time1.substring(time1.length - 2);
        const ampm2 = time2.substring(time2.length - 2);

        if (ampm1 === ampm2) {
            if (time1.length === time2.length) {
                return time1.localeCompare(time2);
            } else {
                return time1.length < time2.length ? -1 : 1;
            }
        } else {
            return ampm1 < ampm2 ? -1 : 1;
        }
    });

    return times;
};
