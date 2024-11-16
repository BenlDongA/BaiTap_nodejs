import express from 'express';
import { connectDB } from './config/congig.js'; 
import bookingRoute from './routes/booking.js';

const app = express();
const port = 3000;

connectDB();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', bookingRoute);

// Chạy server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
