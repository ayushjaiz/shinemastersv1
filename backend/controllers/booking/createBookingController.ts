import { Request, Response } from "express";
import { BookingModel } from "../../models";
import { AuthenticatedRequest } from "../../middleware";

const createBooking = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const { workerId, duration } = req.body;
        const userId = req.user.userId;

        if (!workerId) {
            res.status(400).json({ status: "failed", message: 'WorkerId not provided' });
            return;
        }

        const newBooking = await BookingModel.createBooking({
            userId,
            workerId: parseInt(workerId),
            startDate: new Date(),
            duration: 0,
        });

        
        res.status(201).json({ status: "success", message: "Booking created successfully", booking: newBooking });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ status: "failed", message: error });
    }
};

export default createBooking;
