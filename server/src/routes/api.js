import express from 'express';

import {
    getContacts,
    getSentRequests,
    getReceivedRequests,
    createRequest,
    acceptRequest,
    cancelRequest,
    getDateAvailabilities,
    createDateAvailability,
    getMeetings,
    createMeeting,
    updateDateAvailability,
} from '../controllers';

const router = express.Router();

// Contacts
router.get('/contacts/:userId', getContacts);

// Requests
router.get('/requests/:email/:role', (req, res) => {
    const { role } = req.params;
    if (role === 'sender') {
        getSentRequests(req, res);
    } else if (role === 'receiver') {
        getReceivedRequests(req, res);
    } else {
        return res.status(400).json({
            error: {
                message: err.message,
                type: "Role must be either 'sender' or 'receiver'",
                code: 400,
            },
        });
    }
});
router.post('/requests', createRequest);
router.put('/requests/:requestId', acceptRequest);
router.delete('/requests/:requestId', cancelRequest);

// Availability
router.get('/availabilities/:userId', getDateAvailabilities);
router.post('/availabilities', createDateAvailability);
router.put('/availabilities/:userId/:date', updateDateAvailability);

// Meeting
router.get('/meetings/:userId', getMeetings);
router.post('/meetings', createMeeting);

export default router;
