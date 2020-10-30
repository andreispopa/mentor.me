import React from 'react';
import moment from 'moment';
import { Divider } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import { Detail, ItemDetails, FlexContainer } from '../../ui';

export const MeetingsListItem = ({ item }) => {
    const dateOnly = moment.utc(item.date).format('MMM Do YYYY');
    const participant = item.participant[0];
    return (
        <>
            <FlexContainer>
                <CalendarOutlined
                    style={{ fontSize: '1.5rem', marginTop: '.2rem' }}
                />
                <ItemDetails>
                    <div>
                        <Detail>With:</Detail> {participant.firstName}{' '}
                        {participant.lastName}
                    </div>
                    <div>
                        <Detail>Date:</Detail> {dateOnly}
                    </div>
                    <div>
                        <Detail>Time:</Detail> {item.time}
                    </div>
                </ItemDetails>
            </FlexContainer>
            <Divider />
        </>
    );
};
