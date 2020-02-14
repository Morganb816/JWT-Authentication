/**
 * @module Authorization Controller
 */

import { Router } from 'express';
import { loginService, signupService, refreshService, logoutService } from '../service/authService';
import { authenticated } from '../middleware/authorized';

/**
 * Auth Controller.
 * This is our controller for handling authorization related services.
 * @export
 * @Router
 */
const authController: Router = Router();

authController.post('/login', loginService);

authController.post('/signup', signupService);

authController.post('/refresh', refreshService);

const logout: Router = Router();
logout.use(authenticated);
logout.post('/logout', logoutService);
authController.use(logout);

export default authController;