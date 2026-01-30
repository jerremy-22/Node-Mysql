import express from 'express';
import { getUsers, createUser } from './users.controller';

const router = express.Router();

// Routes
router.get('/', getUsers);
router.post('/', createUser);

export default router;