import mongoose from 'mongoose';

const shipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true, default: 75 },
});

const Ship = mongoose.model('Ship', shipSchema);
export default Ship;
