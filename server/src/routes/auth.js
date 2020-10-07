import express from 'express';
import { createAccount } from '../controllers';

const router = express.Router();

router.post('/create-account', createAccount);

export default router;
