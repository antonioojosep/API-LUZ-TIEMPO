import express from 'express';
import { createUserHandler, getAllUsersHandler, loginHandler } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsersHandler);

router.post('/register', createUserHandler);

router.post('/login', loginHandler);

export default router;