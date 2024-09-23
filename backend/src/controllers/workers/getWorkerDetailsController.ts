import { Request, Response } from "express";
import { Worker, WorkerModel } from "../../models";
import { cacheService } from "../../services";

const getWorkerDetails = async function (req: Request, res: Response) {
    try {
        const workerId = parseInt(req.params.workerId, 10);

        if (isNaN(workerId)) {
            return res.status(400).json({ error: 'Invalid workerId' });
        }

        const cacheKey = `worker:${workerId}`;

        // Check if the worker details are cached
        const cachedData = await cacheService.get(cacheKey);
        if (cachedData) {
            console.log('Retrieved from cache');
            return res.send(JSON.parse(cachedData)); // Return cached worker details
        }

        const worker = await WorkerModel.getWorkerDetails(workerId);

        if (!worker) {
            return res.status(404).json({ error: 'Worker not found' });
        }
        await cacheService.set(cacheKey, JSON.stringify(worker), 60);

        res.send(worker);
    }
    catch (error) {
        console.error('Error retrieving workers:', error);
        res.status(500).json({ status: "error retrieving workers", message: 'Internel server error' });
    }
}

export default getWorkerDetails;