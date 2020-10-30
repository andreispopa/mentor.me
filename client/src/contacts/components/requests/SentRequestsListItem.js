import React from 'react';
import { Button, Divider } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const RequestRecepient = styled.span`
    font-size: 1.1rem;
`;

const RequstSent = styled(Button)`
    position: relative;
    left: 2.5rem;
`;

export const SentRequestsListItem = ({ item: request }) => {
    return (
        <div>
            <RequestRecepient>{request.receiver}</RequestRecepient>
            <RequstSent disabled={true} size="small" icon={<LogoutOutlined />}>
                Request Sent
            </RequstSent>
            <Divider />
        </div>
    );
};
