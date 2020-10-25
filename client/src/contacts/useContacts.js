import { useState, useEffect } from 'react';

import { getContacts } from './helper';

export const useContacts = (user) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const contactsList = await getContacts(user.uid);
                setContacts(contactsList);
            } catch (err) {
                console.log(`Get Contacts Error: ${err}`);
            }
        };
        fetchContacts();
    }, [user]);

    return contacts;
};
