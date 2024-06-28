// routes/reservations.js
import express from "express";
import { createReservation, getReservations } from '../controllers/reservation.js';
import { verifyToken } from '../utils/verifyToken.js';
import Reservation from "../models/reservation.js";

const router = express.Router();

router.post('/', verifyToken, createReservation);
router.get('/:userId', verifyToken, getReservations);

export default router;
