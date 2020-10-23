import React from 'react';

export const AvailabilityListItem = ({ date, times }) => {
    return (
        <div>
            <div>Date: {date}</div>
            <div>
                Times:{' '}
                {times.map((time, index) => {
                    return <div key={index}>{time}</div>;
                })}
            </div>
        </div>
    );
};
