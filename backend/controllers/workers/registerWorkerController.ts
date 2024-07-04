import { Request, Response } from "express";
import { Worker, WorkerModel } from "../../models";
import { AuthenticatedRequest } from "../../middleware";
import { uploadImage } from "../../services";

const registerWorker = async function (req: AuthenticatedRequest, res: Response) {
    try {
        const {
            workerType,
            experienceYears,
            dailyRate,
            availability,
            location,
            bio
        } = req.body;

        const userId = req.user.id;

        let imageUrl: string | undefined;
        if (req.file) {
            const image = await uploadImage(req.file.buffer);
            imageUrl = image.secure_url;
        }

        const newWorker: Worker = await WorkerModel.createWorker({
            userId,
            workerType,
            bio,
            availability,
            dailyRate,
            location,
            experienceYears
        });

        res.status(201).json({ status: "success", message: 'Worker registered successfully', Worker: newWorker });
    } catch (error) {
        console.error('Error registering worker:', error);
        res.status(500).json({ status: "error registering worker", message: error });
    }
}

export default registerWorker;