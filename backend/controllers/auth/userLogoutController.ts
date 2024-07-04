import { Request, Response } from 'express';

const userLogout = async function (req: Request, res: Response) {
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).json({ message: 'Logged out successfully' });
}

export default userLogout;