import React from 'react';
import axios from 'axios';

export const ReceivedRequestsListItem = ({
    item: request,
    onChange,
    onAccepted,
}) => {
    const onAcceptClicked = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_REQUESTS}/${request._id}`);
            onChange();
            onAccepted();
        } catch (err) {
            console.log(`Accept Request Error: ${err}`);
        }
    };

    const onRejectClicked = async () => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_REQUESTS}/${request._id}`
            );
            onChange();
        } catch (err) {
            console.log(`Cancel Request Error: ${err}`);
        }
    };

    return (
        <div>
            <h3>{request.sender}</h3>
            <button onClick={onAcceptClicked}>accept</button>
            <button onClick={onRejectClicked}>reject</button>
        </div>
    );
};
