import React from 'react';
import { Divider, Empty } from 'antd';

import { List, Title, TitleSection } from '../../ui';
import { ContactsListItem } from './ContactsListItem';
import { AddContactModal } from './AddContactModal';

// TODO: Add ability to search through contacts

export const ContactsList = ({ contacts, ...props }) => {
    return (
        <>
            <TitleSection>
                <Title>My Contacts</Title>
                <AddContactModal {...props} />
            </TitleSection>
            <Divider />
            {contacts.length > 0 ? (
                <List items={contacts} itemComponent={ContactsListItem} />
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
        </>
    );
};
