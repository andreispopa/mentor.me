import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Divider } from 'antd';

import { getAvailabilityDateToTimesMap } from '../helper';
import { AuthContext } from '../../context';
import { AddAvailability } from './AddAvailability';
import { PaddedContainer, PageLayout, Title, TitleSection } from '../../ui';

export const AvailabilityPage = () => {
    const { user } = useContext(AuthContext);

    const [availableDates, setAvailableDates] = useState(() => new Map());

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
        <PageLayout>
            <PaddedContainer>
                <TitleSection>
                    <Title>My Availability</Title>
                </TitleSection>

                <Divider />

                <AddAvailability
                    user={user}
                    availability={availableDates}
                    onAvailabilityAdded={fetchAvailability}
                />
            </PaddedContainer>
        </PageLayout>
    );
};
