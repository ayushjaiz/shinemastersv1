import express from 'express';
import { createBooking, updateBooking } from '../controllers';
import { checkUserAuth } from '../middleware';
import { rateLimiter } from '../middleware/rateLimiter';

const router = express.Router();

/* Protected Routes */
router.post('/', rateLimiter({ windowInSeconds: 60, maxRequests: 20 }), checkUserAuth, createBooking);
router.put('/:bookingId', checkUserAuth, updateBooking);

export default router;
