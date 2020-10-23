import express from 'express';

import { createAccount } from '../controllers';

const router = express.Router();

router.post('/accounts', createAccount);

export default router;
