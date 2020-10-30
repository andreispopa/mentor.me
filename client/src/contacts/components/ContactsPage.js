import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AuthContext } from '../../context';
import { ContactsList } from './ContactsList';
import { RequestsList } from './requests/RequestsList';
import { getSentRequests, getReceivedRequests, getContacts } from '../helper';
import { PaddedContainer, PageLayout } from '../../ui';

export const ContactsPage = () => {
    const { user } = useContext(AuthContext);

    const [sentRequests, setSentRequests] = useState([]);
    const [receivedRequests, setReceivedRequests] = useState([]);
    const [contacts, setContacts] = useState([]);

    const fetchContacts = useCallback(async () => {
        try {
            const contactsList = await getContacts(user.uid);
            setContacts(contactsList);
        } catch (err) {
            console.log(`Get Contacts Error: ${err}`);
        }
    }, [user]);

    const fetchSentRequests = useCallback(async () => {
        try {
            const sentRequests = await getSentRequests(user.email);
            setSentRequests(sentRequests);
        } catch (err) {
            console.log(`Get Sent Requests Error: ${err}`);
        }
    }, [user]);

    const fetchReceivedRequests = useCallback(async () => {
        try {
            const receivedRequests = await getReceivedRequests(user.email);
            setReceivedRequests(receivedRequests);
        } catch (err) {
            console.log(`Get Received Requests Error: ${err}`);
        }
    }, [user]);

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    useEffect(() => {
        fetchSentRequests();
    }, [fetchSentRequests]);

    useEffect(() => {
        fetchReceivedRequests();
    }, [fetchReceivedRequests]);

    return (
        <PageLayout>
            <PaddedContainer>
                <RequestsList
                    sentRequests={sentRequests}
                    receivedRequests={receivedRequests}
                    onChange={fetchReceivedRequests}
                    onRequestAccepted={fetchContacts}
                />
                <ContactsList
                    user={user}
                    onContactAdded={fetchSentRequests}
                    contacts={contacts}
                />
            </PaddedContainer>
        </PageLayout>
    );
};
