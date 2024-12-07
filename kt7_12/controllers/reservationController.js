import Reservation from '../models/reservationModel.js';


class ReservationController {
    static async createReservation(req, res) {
        try {
            const { serviceId, date, time, peopleCount } = req.body;
            const reservation = new Reservation({
                userId: req.user.userId, // Ensure `req.user` is set from the JWT token
                serviceId,
                date,
                time,
                peopleCount,
            });
            await reservation.save();
            res.status(201).json(reservation);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getUserReservations(req, res) {
        try {
            const reservations = await Reservation.find({ userId: req.user.userId }).populate('serviceId');
            res.status(200).json(reservations);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteReservation(req, res) {
        try {
            const { id } = req.params;
            const reservation = await Reservation.findOneAndDelete({ _id: id, userId: req.user.userId });
            if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
            res.status(200).json({ message: 'Reservation deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ReservationController;
