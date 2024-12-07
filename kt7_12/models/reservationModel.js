import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    peopleCount: { type: Number, required: true }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
