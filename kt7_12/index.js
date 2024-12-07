import express from 'express';
import authRoutes from './route/authRoutes.js';
import serviceRoutes from './route/serviceRoutes.js';
import reservationRoutes from './route/reservationRoutes.js';
import { connectDB } from './config/connectDB.js';


connectDB();

const app = express();


app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/services', serviceRoutes);
app.use('/reservations', reservationRoutes);

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Export ứng dụng (nếu cần)
export default app;
