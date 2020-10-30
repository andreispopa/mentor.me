import React from 'react';
import axios from 'axios';
import { Button, Divider } from 'antd';
import styled from 'styled-components';

const RequestSender = styled.span`
    font-size: 1.1rem;
`;

const Actions = styled.span`
    position: relative;
    left: 2.5rem;
`;

export const ReceivedRequestsListItem = ({
    item: request,
    onChange: handleChange,
    onRequestAccepted: handleRequestAccepted,
}) => {
    const handleAcceptClicked = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_REQUESTS}/${request._id}`);
            handleChange();
            handleRequestAccepted();
        } catch (err) {
            console.log(`Accept Request Error: ${err}`);
        }
    };

    const handleRejectClicked = async () => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_REQUESTS}/${request._id}`
            );
            handleChange();
        } catch (err) {
            console.log(`Cancel Request Error: ${err}`);
        }
    };

    return (
        <div>
            <RequestSender>{request.sender}</RequestSender>

            <Actions>
                <Button type="primary" onClick={handleAcceptClicked}>
                    Accept
                </Button>
                <Button onClick={handleRejectClicked}>Cancel</Button>
            </Actions>
            <Divider />
        </div>
    );
};
