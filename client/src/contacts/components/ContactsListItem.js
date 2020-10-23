import React from 'react';

export const ContactsListItem = ({ item }) => {
    return (
        <div>
            <h3>
                {item.firstName} {item.lastName}
            </h3>
            <h5>{item.email}</h5>
        </div>
    );
};
