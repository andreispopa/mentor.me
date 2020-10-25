import axios from 'axios';

export const createRequest = async (senderEmail, receiverEmail) => {
    const newRequest = {
        sender: senderEmail,
        receiver: receiverEmail,
    };

    await axios.post(
        process.env.REACT_APP_REQUESTS,
        JSON.stringify(newRequest),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};

export const getContacts = async (userId) => {
    const response = await axios.get(
        `${process.env.REACT_APP_CONTACTS}/${userId}`
    );
    return response.data.contacts;
};

export const getSentRequests = async (email) => {
    return await getRequests(email, 'sender');
};

export const getReceivedRequests = async (email) => {
    return await getRequests(email, 'receiver');
};

const getRequests = async (email, role) => {
    const response = await axios.get(
        `${process.env.REACT_APP_REQUESTS}/${email}/${role}`
    );
    return response.data;
};
