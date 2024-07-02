import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface Worker {
    id?: number;
    userId: number;
    workerType: string;
    experienceYears?: number;
    dailyRate?: number;
    availability?: Boolean;
    location?: string;
    bio?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

class WorkerModel {
    static async createWorker(worker: Worker): Promise<Worker> {
        try {
            const { userId, workerType, bio, availability, dailyRate, location, experienceYears }: Worker = worker;

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
}
