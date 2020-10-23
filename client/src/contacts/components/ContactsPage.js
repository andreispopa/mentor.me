import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AuthContext } from '../../context';
import { Header } from '../../ui';
import { ContactsList } from './ContactsList';
import { RequestsList } from './requests/RequestsList';
import {
    fetchSentRequests,
    fetchReceivedRequests,
    fetchContacts,
} from '../helper';
import { AddContactModal } from './AddContactModal';

export const ContactsPage = () => {
    const { user } = useContext(AuthContext);

    const [sentRequests, setSentRequests] = useState([]);
    const [receivedRequests, setReceivedRequests] = useState([]);
    const [contacts, setContacts] = useState([]);

    const getContacts = useCallback(async () => {
        try {
            const contactsList = await fetchContacts(user.uid);
            setContacts(contactsList);
        } catch (err) {
            console.log(`Get Contacts Error: ${err}`);
        }
    }, [user]);

    const getSentRequests = useCallback(async () => {
        try {
            const sentRequests = await fetchSentRequests(user.email);
            setSentRequests(sentRequests);
        } catch (err) {
            console.log(`Get Sent Requests Error: ${err}`);
        }
    }, [user]);

    const getReceivedRequests = useCallback(async () => {
        try {
            const receivedRequests = await fetchReceivedRequests(user.email);
            setReceivedRequests(receivedRequests);
        } catch (err) {
            console.log(`Get Received Requests Error: ${err}`);
        }
    }, [user]);

    useEffect(() => {
        getContacts();
    }, [getContacts]);

    useEffect(() => {
        getSentRequests();
    }, [getSentRequests]);

    useEffect(() => {
        getReceivedRequests();
    }, [getReceivedRequests]);

    return (
        <>
            <Header />

            <AddContactModal user={user} onContactAdded={getSentRequests} />

            <RequestsList
                sentRequests={sentRequests}
                receivedRequests={receivedRequests}
                onChange={getReceivedRequests}
                onAccepted={getContacts}
            />
            <ContactsList contacts={contacts} />
        </>
    );
};
