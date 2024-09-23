import redisClient from "../config/redisConfig";

const get = async (key: string): Promise<string | null> => {
    try {
        const value = await redisClient.get(key);
        return value;
    } catch (error) {
        console.error('Error getting data from Redis', error);
        return null;
    }
}

const set = async (key: string, value: string, ttl: number): Promise<void> => {
    try {
        await redisClient.setEx(key, ttl, value);
    } catch (error) {
        console.error('Error setting data from Redis', error);
    }
}

// Function to delete a cached value
const del = async (key: string): Promise<void> => {
    try {
        await redisClient.del(key);
        console.log(`Deleted key: ${key} from cache`);
    } catch (error) {
        console.error('Error deleting data from Redis', error);
    }
};

// Export the functions so they can be used in other parts of the app
export default { get, set, del };