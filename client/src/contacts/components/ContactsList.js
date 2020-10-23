import React from 'react';
import { Empty } from 'antd';

import { List } from '../../ui';
import { ContactsListItem } from './ContactsListItem';

// TODO: Add ability to search through contacts

export const ContactsList = ({ contacts }) => {
    return (
        <>
            <h1>My Contacts</h1>
            {contacts.length > 0 ? (
                <List items={contacts} itemComponent={ContactsListItem} />
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
        </>
    );
};
