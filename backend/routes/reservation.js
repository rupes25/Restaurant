import express from "express";
import {sendReservation} from "../controllers/reservation.js"

const router = express.Router(); //ek method hai express ka jo mini app banata hai.

router.post("/send",sendReservation);



export default router;