import { Request, Response } from "express";
import { Worker, WorkerModel } from "../../models";
import { cacheService } from "../../services"

const getAllWorkers = async function (req: Request, res: Response) {
    try {
        const cacheKey = 'workers:list';
        const cachedData = await cacheService.get(cacheKey);

        if (cachedData) {
            console.log('Retrieved from cache');
            res.send(JSON.parse(cachedData));
            return;
        }

        const workers: Worker[] = await WorkerModel.getAllWorkers();

        console.log('Adding data into cache');
        await cacheService.set(cacheKey, JSON.stringify(workers), 60);

        res.send(workers);
    }
    catch (error) {
        console.error('Error retrieving worker:', error);
        res.status(500).json({ status: "error retrieving workers", message: 'Internel server error' });
    }

}

export default getAllWorkers;
