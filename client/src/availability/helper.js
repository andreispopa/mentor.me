import axios from 'axios';
import moment from 'moment';
import { DATE_FORMAT } from '../constants';

export const getAvailabilityDateToTimesMap = async (userId) => {
    const availability = await axios.get(
        `${process.env.REACT_APP_AVAILABILITIES}/${userId}`
    );

    const dates = new Map();
    availability.data.forEach((item) => {
        const dateString = moment.utc(item.date).format(DATE_FORMAT);
        dates.set(dateString, item.times);
    });

    return dates;
};

export const updateAvailability = async (userId, date, times) => {
    const updatedTimes = {
        times,
    };

    await axios.put(
        `${process.env.REACT_APP_AVAILABILITIES}/${userId}/${date}`,
        JSON.stringify(updatedTimes),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};
