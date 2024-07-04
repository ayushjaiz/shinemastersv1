import { Request, Response } from "express";
import { Worker, WorkerModel } from "../../models";

const getWorkerDetails = async function (req: Request, res: Response) {
    try {
        const { workerId } = req.query;

        const worker: Worker = await WorkerModel.getWorkerDetails(1);
        return worker;
    }
    catch (error) {
        console.error('Error retrieving workers:', error);
        res.status(500).json({ status: "error retrieving workers", message: 'Internel server error' });
    }
}

export default getWorkerDetails;