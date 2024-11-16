import Booking from '../model/booking.js';

class BookingController {
  static async showBookingForm(req, res) {
    res.render('form_booking', { title: 'Đặt Chỗ' });
  }
  static async createBooking(req, res) {
    try {
      const { customerName, date, time } = req.body;
      const bookingDate = new Date(date);
      const bookingTime = time;
      const existingBooking = await Booking.findOne({
        date: bookingDate,
        time: bookingTime,
      });

      if (existingBooking) {
        return res.status(400).send('Lịch đặt chỗ này đã có, vui lòng chọn thời gian khác.');
      }
      const newBooking = new Booking({
        customerName,
        date: bookingDate,
        time: bookingTime,
        status: 'Pending',  
      });

      await newBooking.save(); 
      res.redirect('/bookings');  
      
    } catch (error) {
      console.error('Lỗi khi tạo đặt chỗ:', error);
      res.status(500).send('Có lỗi xảy ra khi tạo đặt chỗ.');
    }
  }

  static async list(req, res) {
    try {
      const bookings = await Booking.find();  
      res.render('bookList', { title: 'Danh sách đặt chỗ', bookings });
    } catch (error) {
      console.error('Lỗi khi tải danh sách đặt chỗ:', error);
      res.status(500).send('Có lỗi xảy ra.');
    }
  }
  static async editBooking(req, res) {
    try {
        const { id } = req.params;
        const booking = await Booking.findById(id);  // Tìm đặt chỗ theo ID
        if (!booking) {
            return res.status(404).send('Không tìm thấy đặt chỗ.');
        }
        res.render('editBooking', { title: 'Sửa Đặt Chỗ', booking });
    } catch (error) {
        console.error('Lỗi khi hiển thị form sửa:', error);
        res.status(500).send('Có lỗi xảy ra.');
    }
}

static async updateBooking(req, res) {
    try {
      const bookingId = req.params.id;
      const { customerName, date, time } = req.body;

      // Kiểm tra trùng ngày và giờ khi cập nhật
      const existingBooking = await Booking.findOne({ date, time, _id: { $ne: bookingId } });
      if (existingBooking) {
        return res.status(400).send('Lịch đặt chỗ này đã có, vui lòng chọn thời gian khác.');
      }

      // Cập nhật thông tin đặt chỗ
      const updatedBooking = await Booking.findByIdAndUpdate(
        bookingId, 
        { customerName, date, time }, 
        { new: true }  // Trả về bản ghi mới sau khi cập nhật
      );

      if (!updatedBooking) {
        return res.status(404).send('Không tìm thấy đặt chỗ');
      }

      res.redirect('/bookings');  // Quay lại trang danh sách đặt chỗ
    } catch (error) {
      console.error('Lỗi khi cập nhật đặt chỗ:', error);
      res.status(500).send('Có lỗi xảy ra khi cập nhật đặt chỗ.');
    }
  }
  static async cancelBooking(req, res) {
    try {
        const { id } = req.params;
        const booking = await Booking.findByIdAndUpdate(id, { status: 'Cancelled' }, { new: true });
        if (!booking) {
            return res.status(404).send('Không tìm thấy đặt chỗ.');
        }
        res.redirect('/bookings');  
    } catch (error) {
        console.error('Lỗi khi hủy đặt chỗ:', error);
        res.status(500).send('Có lỗi xảy ra khi hủy đặt chỗ.');
    }
}   
}

export default BookingController;
