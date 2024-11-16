import express from 'express';
import BookingController from '../controller/booking.js';

const router = express.Router();


router.get('/', BookingController.showBookingForm);
router.post('/bookings/create', BookingController.createBooking);
router.get('/bookings', BookingController.list);
router.get('/bookings/cancel/:id', BookingController.cancelBooking);
router.post('/bookings/update/:id', BookingController.updateBooking); 
router.get('/bookings/edit/:id', BookingController.editBooking); 

export default router;
