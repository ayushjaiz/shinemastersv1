import pool from "../config/dbConfig";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    isWorker?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

/**
 * Manages user-related operations in the database.
 * 
 * Methods:
 * - createUser: Adds new user information to the database.
 * - getUser: Retrieves user information from the database.
 * - updateUser: Updates user information in the database.
 */

class UserModel {

    /**
     * Adds a new user information in the database.
     * 
     * @param User - User object to add.
     * @returns Promise that resolves to the added user.
     */
    static async createUser(user: User): Promise<User> {
        try {
            const { username, email, password: hashedPassword } = user;
            console.log("email" + email);
            const res = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hashedPassword,
                }
            });
            return res;
        } catch (error: any) {
            throw new Error('Failed to create user: ' + error.message);
        }
    }

    /**
     * Retrieve user information from the database.
     * 
     * @param options - An object containing options fields to filter user retrieval.
     * @param options.email - Email address of the user to retrieve.
     * @param options.id - Id of the user to retrieve.
     * @returns Promise that resolves to the retrieved user or null if no user was found.
     */
    static async getUser(options: { id?: number, email?: string }): Promise<User | null> {
        try {
            const { id, email } = options;

            // Prepare the where object with only the fields that are provided
            const where: { id?: number, email?: string } = {};
            if (id) where.id = id;
            if (email) where.email = email;

            // Use findFirst to search by either email or id
            const user = await prisma.user.findFirst({
                where: where,
            });

            return user;
        } catch (error: any) {
            throw new Error('Failed to retrieve user: ' + error.message);
        }
    }

    /**
     * Updates user information in the database.
     * 
     * @param id - ID of the user to update.
     * @param options - An object containing optional fields to update.
     * @param options.email - New email address of the user.
     * @param options.password - New password of the user.
     * @returns Promise that resolves to the updated user or null if no user was found.
     */
    static async updateUser(id: number, options: { email?: string, password?: string }): Promise<boolean> {
        try {
            const { email, password } = options;

            // Prepare the data object with only the fields that are provided
            const data: { email?: string, password?: string } = {};
            if (email) data.email = email;
            if (password) data.password = password;

            // Use Prisma's update method to update the user
            const result = await prisma.user.update({
                where: { id: id },
                data: data,
            });

            return result !== null; // Return true if the update was successful
        } catch (error: any) {
            throw new Error('Failed to update user: ' + error.message);
        }
    }
}

export default User;
export { UserModel };
