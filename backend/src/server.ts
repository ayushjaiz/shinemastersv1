import * as dotenv from 'dotenv';
dotenv.config();

import express from "express";
import { authRoutes, bookingRouters, workerRoutes } from "./routes";
import cors from 'cors'
import { appPort } from "./config";
const app = express();

const port = appPort;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// cors policy
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

app.get('/', (req, res) => {
    res.send('Response from server');
})

app.use('/api/auth', authRoutes);
app.use('/api/worker', workerRoutes);
app.use('/api/booking', bookingRouters);

// Run server and connect to database
app.listen(port, async () => {
    console.log(`Server running at localhost:${port}`)
    // try {
    //     await connectToDB();
    // } catch (e) {
    //     console.log(e);
    // }
});