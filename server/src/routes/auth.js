import express from 'express';
import { createAccount } from '../controllers';

const router = express.Router();

router.get('/create-account', createAccount);

export default router;
