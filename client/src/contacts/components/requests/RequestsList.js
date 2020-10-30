import React from 'react';

import { List } from '../../../ui';
import { SentRequestsListItem } from './SentRequestsListItem';
import { ReceivedRequestsListItem } from './ReceivedRequestsListItem';

export const RequestsList = ({ sentRequests, receivedRequests, ...props }) => {
    return (
        <>
            {sentRequests.length > 0 && (
                <div>
                    <h3>Sent Requests</h3>
                    <List
                        items={sentRequests}
                        itemComponent={SentRequestsListItem}
                    />
                </div>
            )}

            {receivedRequests.length > 0 && (
                <div>
                    <h3>Received Requests</h3>
                    <List
                        items={receivedRequests}
                        itemComponent={ReceivedRequestsListItem}
                        {...props}
                    />
                </div>
            )}
        </>
    );
};
