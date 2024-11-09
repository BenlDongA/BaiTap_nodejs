import mongoose from 'mongoose';


export function connectDB(){
    mongoose.connect('mongodb://localhost:27017/demonodejs')
  .then(() => console.log('Connected!'));
}
