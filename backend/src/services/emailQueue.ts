import { Queue } from 'bullmq';

const queueName = 'email-queue'

const emailQueue = new Queue(queueName);

interface job {
    emailId: string,
    subject: string,
    body: string,
}

async function addJobs() {
    await emailQueue.add('my-job-name', {

    })
}