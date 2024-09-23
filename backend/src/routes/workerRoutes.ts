import { Router } from "express";
import { checkUserAuth, singleUpload } from "../middleware";
import {
    getAllWorkersController,
    getWorkerDetailsController,
    registerWorkerController,
    updateWorkerController
} from "../controllers";
import { rateLimiter } from "../middleware/rateLimiter";

const router = Router();

// Public routes
router.get('/', rateLimiter({ windowInSeconds: 60, maxRequests: 20 }), getAllWorkersController);
router.get('/:workerId', rateLimiter({ windowInSeconds: 60, maxRequests: 20 }), getWorkerDetailsController);

// Protected routes
router.post('/register', checkUserAuth, singleUpload, registerWorkerController);
router.put('/:workerId', checkUserAuth, singleUpload, updateWorkerController);

export default router;