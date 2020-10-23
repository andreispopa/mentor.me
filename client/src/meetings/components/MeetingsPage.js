import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Empty } from 'antd';
import axios from 'axios';

import { AuthContext } from '../../context';
import { ScheduleMeeting } from './ScheduleMeeting';
import { MeetingsListItem } from './MeetingsListItem';
import { List, Header } from '../../ui';
import { ROUTES } from '../../constants';

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
        <>
            <Header />
            <h1>My Meetings</h1>
            <ScheduleMeeting onMeetingScheduled={getMeetings} />

            {meetings.length > 0 ? (
                <List items={meetings} itemComponent={MeetingsListItem} />
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
            <Link to={ROUTES.CONTACTS}>
                <Button type="primary">Contacts</Button>
            </Link>
            <Link to={ROUTES.AVAILABILITY}>
                <Button type="primary">My Availability</Button>
            </Link>
        </>
    );
};
