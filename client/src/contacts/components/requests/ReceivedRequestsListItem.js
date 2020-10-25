import React from 'react';
import axios from 'axios';

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
            <h3>{request.sender}</h3>
            <button onClick={handleAcceptClicked}>accept</button>
            <button onClick={handleRejectClicked}>reject</button>
        </div>
    );
};
