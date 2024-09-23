import { Router } from "express";
import { checkUserAuth } from "../middleware";
import {
    userLoginController,
    userLogoutController,
    userRegistrationController,
    changeUserPasswordController,
    sendPassWordResetEmailController,
    resetPasswordController,
    getUserDetailsController,
} from "../controllers";
import { rateLimiter } from "../middleware/rateLimiter";

const router = Router();

// Public routes
router.post('/signup', rateLimiter({ windowInSeconds: 60, maxRequests: 10 }), userRegistrationController);
router.post('/login', rateLimiter({ windowInSeconds: 60, maxRequests: 5 }), userLoginController);
router.post('/send-passord-reset-email', rateLimiter({ windowInSeconds: 300, maxRequests: 3 }), sendPassWordResetEmailController);
router.post('/reset-password/:id/:token', rateLimiter({ windowInSeconds: 300, maxRequests: 3 }), resetPasswordController);

// Protected routes
router.post('/change-password', checkUserAuth, rateLimiter({ windowInSeconds: 300, maxRequests: 2 }), changeUserPasswordController);
router.post('/logout', checkUserAuth, userLogoutController);
router.get('/user-info', checkUserAuth, getUserDetailsController);

export default router;
