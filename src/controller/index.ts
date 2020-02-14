import { Router } from 'express';
import authController from './authController';

const api = Router();

api.use('/auth', authController);

export default api;