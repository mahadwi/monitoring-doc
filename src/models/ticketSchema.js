import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  schedule: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  passengerType: { type: String, enum: ['adult', 'child'], required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'paid', 'cancelled'],
    required: true,
    default: 'pending',
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);
export default Ticket;
