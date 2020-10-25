import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Empty } from 'antd';

import { getAvailabilityDateToTimesMap } from '../helper';
import { TopHeader } from '../../ui';
import { AuthContext } from '../../context';
import { AvailabilityListItem } from './AvailabilityListItem';
import { AddAvailability } from './AddAvailability';

export const AvailabilityPage = () => {
    const { user } = useContext(AuthContext);

    const [availableDates, setAvailableDates] = useState({});

    const fetchAvailability = useCallback(async () => {
        try {
            const dates = await getAvailabilityDateToTimesMap(user.uid);
            setAvailableDates(dates);
        } catch (err) {
            console.log(`Get Availability Error: ${err}`);
        }
    }, [user]);

    useEffect(() => {
        fetchAvailability();
    }, [fetchAvailability]);

    return (
        <>
            <TopHeader />
            <h1>My Availability</h1>
            <AddAvailability
                user={user}
                availability={availableDates}
                onAvailabilityAdded={fetchAvailability}
            />

            {availableDates.size > 0 ? (
                <div>
                    {Array.from(availableDates.keys()).map((date, index) => {
                        return (
                            <AvailabilityListItem
                                key={index}
                                date={date}
                                times={availableDates.get(date)}
                            />
                        );
                    })}
                </div>
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
        </>
    );
};
