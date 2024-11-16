import mongoose from 'mongoose';


export function connectDB(){
    mongoose.connect('mongodb://localhost:27017/ktzui')
  .then(() => console.log('Connected!'));
}
