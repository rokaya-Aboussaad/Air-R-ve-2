import Reservation from "../models/reservation.js";


 export const createReservation = async (req, res, next) => {
  const newReservation = new Reservation(req.body);
  try {
    const savedReservation = await newReservation.save();
    res.status(200).json(savedReservation);
  } catch (err) {
    next(err);
  }
};

export const getReservations = async (req, res, next) => {
    try {
      const reservations = await Reservation.find({ userId: req.params.userId });
      res.status(200).json(reservations);
    } catch (err) {
      next(err);
    }
  };