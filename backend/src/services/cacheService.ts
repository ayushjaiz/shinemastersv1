import { createClient } from 'redis';
import { redisConfig } from '../config';

const client = createClient({
    password: redisConfig.password,
    socket: {
        host: redisConfig.host,
        port: redisConfig.port
    }
});


client.on('error', (err) => {
    console.log('Redis Client Error', err);
});


// Connect to Redis
const connectToRedis = async () => {
    try {
        await client.connect();
        console.log('Connected to Redis successfully');
    } catch (error) {
        console.error('Could not connect to Redis', error);
    }
};

// Initialize the connection
connectToRedis()

const get = async (key: string): Promise<string | null> => {
    try {
        const value = await client.get(key);
        return value;
    } catch (error) {
        console.error('Error getting data from Redis', error);
        return null;
    }
}

const set = async (key: string, value: string, ttl: number): Promise<void> => {
    try {
        await client.setEx(key, ttl, value);
    } catch (error) {
        console.error('Error setting data from Redis', error);
    }
}

// Function to delete a cached value
const del = async (key: string): Promise<void> => {
    try {
        await client.del(key);
        console.log(`Deleted key: ${key} from cache`);
    } catch (error) {
        console.error('Error deleting data from Redis', error);
    }
};

// Export the functions so they can be used in other parts of the app
export default { get, set, del };