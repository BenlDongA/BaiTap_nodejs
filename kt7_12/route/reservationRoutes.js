import express from 'express';
import ReservationController from '../controllers/reservationController.js'
import authMiddleware from '../middleware/authMiddleware.js'; // Import your custom middleware

const router = express.Router();

router.post('/', authMiddleware, ReservationController.createReservation); 
router.get('/', authMiddleware, ReservationController.getUserReservations); 
router.delete('/:id', authMiddleware, ReservationController.deleteReservation); 

export default router;
