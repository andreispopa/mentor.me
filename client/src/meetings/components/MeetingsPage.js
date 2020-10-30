import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Divider, Empty } from 'antd';
import axios from 'axios';

import { AuthContext } from '../../context';
import { ScheduleMeeting } from './ScheduleMeeting';
import { MeetingsListItem } from './MeetingsListItem';
import {
    List,
    PaddedContainer,
    PageLayout,
    Title,
    TitleSection,
} from '../../ui';

export const MeetingsPage = () => {
    const { user } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);

    const getMeetings = useCallback(async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_MEETINGS}/${user.uid}`
            );
            setMeetings(response.data);
        } catch (err) {
            console.log(`Get Meetings Error: ${err}`);
        }
    }, [user]);

    useEffect(() => {
        getMeetings();
    }, [getMeetings]);

    return (
        <PageLayout>
            <PaddedContainer>
                <TitleSection>
                    <Title>My Meetings</Title>
                    <ScheduleMeeting onMeetingScheduled={getMeetings} />
                </TitleSection>

                <Divider />
                {meetings.length > 0 ? (
                    <List items={meetings} itemComponent={MeetingsListItem} />
                ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
            </PaddedContainer>
        </PageLayout>
    );
};
