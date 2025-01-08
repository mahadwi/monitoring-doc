import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  ship: { type: mongoose.Schema.Types.ObjectId, ref: 'Ship', required: true },
  date: { type: Date, require: true },
  time: { type: String, enum: ['09:00', '16:00', '19:00', 'extra'], require: true },
  availableSeats: { type: Number, default: 75 },
  customPrices: {
    adult: { type: Number },
    child: { type: Number },
  },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
export default Schedule;
