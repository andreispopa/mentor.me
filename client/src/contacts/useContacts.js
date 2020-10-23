import { useState, useEffect } from 'react';

import { fetchContacts } from './helper';

export const useContacts = (user) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async () => {
            try {
                const contactsList = await fetchContacts(user.uid);
                setContacts(contactsList);
            } catch (err) {
                console.log(`Get Contacts Error: ${err}`);
            }
        };
        getContacts();
    }, [user]);

    return contacts;
};
