import React from 'react';
import styled from 'styled-components';
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Detail, ItemDetails, FlexContainer } from '../../ui';

const Name = styled.div`
    font-size: 1.25rem;
`;

export const ContactsListItem = ({ item }) => {
    return (
        <>
            <FlexContainer>
                <Avatar size={64} icon={<UserOutlined />} />
                <ItemDetails>
                    <Name>
                        {item.firstName} {item.lastName}
                    </Name>
                    <div>
                        <Detail>Email:</Detail> {item.email}
                    </div>
                </ItemDetails>
            </FlexContainer>
            <Divider />
        </>
    );
};
