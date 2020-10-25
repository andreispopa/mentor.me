import React from 'react';

import { List } from '../../../ui';
import { SentRequestsListItem } from './SentRequestsListItem';
import { ReceivedRequestsListItem } from './ReceivedRequestsListItem';

export const RequestsList = ({ sentRequests, receivedRequests, ...props }) => {
    return (
        <>
            {sentRequests.length > 0 || receivedRequests.length > 0 ? (
                <div>
                    <h3>Requests</h3>
                    <List
                        items={sentRequests}
                        itemComponent={SentRequestsListItem}
                    />
                    <List
                        items={receivedRequests}
                        itemComponent={ReceivedRequestsListItem}
                        {...props}
                    />
                </div>
            ) : null}
        </>
    );
};
