import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    createdAt?: Date;
}

interface updateUserParams {
    email?: string;
    password?: string;
}

class UserModel {
    /**
     * Adds a new user information in the database.
     * 
     * @param User - User object containing username, email, and password to add.
     */
    static async createUser({ username, email, password }: User): Promise<User> {
        try {
            console.log("email" + email);
            const res = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: password
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
     * @param email - Email address of the user to retrieve.
     * @param id - Id of the user to retrieve.
     */
    static async getUser(options: { email?: string, id?: number }): Promise<User | null> {
        try {
            const { email, id } = options;

            // Use findFirst to search by either email or id
            const user = await prisma.user.findFirst({
                where: {
                    OR: [
                        { email: email },
                        { id: id }
                    ]
                }
            });

            return user;
        } catch (error: any) {
            throw new Error('Failed to retrieve user: ' + error.message);
        }
    }

    /**
     * Updates user information in the database.
     * 
     * @param id - ID of the user to update..
     * @param email - New email address of the user.
     * @param password - New password of the user.
     */
    static async updateUser(id: number, { email, password }: updateUserParams): Promise<User> {
        try {
            const data: { email?: string, password?: string } = {};
            if (email) data.email = email;
            if (password) data.password = password;

            // Use Prisma's update method to update the user
            const result = await prisma.user.update({
                where: { id: id },
                data: data,
            });

            return result;
        } catch (error: any) {
            throw new Error('Failed to update user: ' + error.message);
        }
    }
}

export default User;
export { UserModel };
