//YAHA HM EXPRESS APP CREATE KR RHE HAI JO HTTP REQUEST KO HANDLE KREGA.

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter from "./routes/reservation.js";


const app = express(); // yaha express app create kr rhe hai jo HTTP request handle krega.
// ab hame env file ko use krna hai so
dotenv.config({path:"./config/config.env"}) // ye bata rha hai ki hmara env source kha pe located hai.

app.use(cors({ // yaha pe hm backend ko fronntend se connect kr rhe hai.
    origin: [process.env.FRONTEND_URL], // isme hm apna frontend ka location fill krnege jo ki env file me hai.
    methods:["POST"], //yaani ki aap apne backend aur frontend me kaun kaun se operation perform krna chahte hai ie. GET,PUT,POST,DELETE
    credentials:true,
})
);

app.use(express.json()); //Agar koi client  JSON format me data bhejta hai, toh Express use automatically parse kar ke req.body me store kar de.
app.use(express.urlencoded({extended:true})); // iska mtlb hai ki agar user input bhejta hai to wo json format me hoga to usse convert krne ke liye use kiya jaa rha hai.

dbConnection(); // yaha pe hm apne db ko use kr rhe hai

app.use(errorMiddleware) // yha pe hm error Middleware ko import kr rhe hai as to show error

app.use('/reservation',reservationRouter);

export default app;