import { Router } from 'express';
import authController from './authController';

/**
 * api is our main controller that we use to add endpoints.
 * its base url is just root.
 * @export
 * @Router api
 */
const api = Router();

api.use('/auth', authController);

export default api;