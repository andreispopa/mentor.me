import React from 'react';
import moment from 'moment';

export const MeetingsListItem = ({ item }) => {
    const dateOnly = moment.utc(item.date).format('MMM Do YYYY');
    const participant = item.participant[0];
    return (
        <div>
            <div>
                With: {participant.firstName} {participant.lastName}
            </div>
            <div>Date: {dateOnly}</div>
            <div>Time: {item.time}</div>
        </div>
    );
};
