import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface Worker {
    id?: number;
    userId: number;
    workerType?: string | null;
    experienceYears?: number | null;
    dailyRate?: number | null;
    availability?: boolean | null;
    location?: string | null;
    bio?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

interface updateWorkerParams {
    workerType?: string;
    experienceYears?: number;
    dailyRate?: number;
    availability?: Boolean;
    location?: string;
    bio?: string;
}

class WorkerModel {
    static async createWorker(
        { userId,
            workerType,
            bio,
            availability,
            dailyRate,
            location,
            experienceYears
        }: Worker
    ): Promise<Worker> {

        try {
            const data: any = {
                userId,
                workerType,
            };

            if (experienceYears !== undefined) {
                data.experienceYears = experienceYears;
            }

            if (dailyRate !== undefined) {
                data.dailyRate = dailyRate;
            }

            if (availability !== undefined) {
                data.availability = availability;
            }

            if (location !== undefined) {
                data.location = location;
            }

            if (bio !== undefined) {
                data.bio = bio;
            }

            const createdWorker = await prisma.worker.create({
                data: data
            });

            return createdWorker;
        } catch (error: any) {
            throw new Error('Failed to create worker: ' + error.message);
        }
    }

    static async updateWorker(
        workerId: number,
        {
            workerType,
            bio,
            availability,
            dailyRate,
            location,
            experienceYears
        }: updateWorkerParams
    ): Promise<Worker> {
        try {
            const data: any = {};

            if (workerType !== undefined) {
                data.workerType = workerType;
            }

            if (experienceYears !== undefined) {
                data.experienceYears = experienceYears;
            }

            if (dailyRate !== undefined) {
                data.dailyRate = dailyRate;
            }

            if (availability !== undefined) {
                data.availability = availability;
            }

            if (location !== undefined) {
                data.location = location;
            }

            if (bio !== undefined) {
                data.bio = bio;
            }

            const updatedWorker = await prisma.worker.update({
                where: { id: workerId },
                data: data
            });

            return updatedWorker;
        } catch (error: any) {
            console.error(`Failed to update worker with ID ${workerId}: ${error.message}`);
            throw new Error('Failed to update worker');
        }
    }
}

export default Worker;
export { WorkerModel };
