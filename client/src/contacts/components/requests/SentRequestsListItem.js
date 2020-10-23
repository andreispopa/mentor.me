import React from 'react';

export const SentRequestsListItem = ({ item: request }) => {
    return (
        <div>
            <h3>{request.receiver}</h3>
            <div>sent request</div>
        </div>
    );
};
