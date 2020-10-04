import React, { useState } from 'react';

import { Empty } from 'antd';
import { MeetingsListItem } from './MeetingsListItem';

import { List, Header } from '../../ui';

export const MeetingsPage = () => {
    const [meetings, setMeetings] = useState([]);
    return (
        <>
            <Header />
            <h1>My Meetings</h1>
            {meetings.length > 0 ? (
                <List items={meetings} itemComponent={MeetingsListItem} />
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
        </>
    );
};
