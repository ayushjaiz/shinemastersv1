import { createClient } from 'redis';
import { redisConfig } from '../config';

const redisClient = createClient({
    url: redisConfig.url
});

redisClient.on('error', (err) => {
    console.log('Redis Client Error', err);
});

// Connect to Redis
const connectToRedis = async () => {
    try {
        await redisClient.connect();
        console.log('Connected to Redis successfully');
    } catch (error) {
        console.error('Could not connect to Redis', error);
    }
};

connectToRedis()

export default redisClient;