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

const router = Router();

// Public routes
router.post('/signup', userRegistrationController);
router.post('/login', userLoginController);
router.post('/send-passord-reset-email', sendPassWordResetEmailController);
router.post('/reset-password/:id/:token', resetPasswordController);

// Protected routes
router.post('/change-password', checkUserAuth, changeUserPasswordController);
router.post('/logout', checkUserAuth, userLogoutController);
router.get('/user-info', checkUserAuth, getUserDetailsController);

export default router;
