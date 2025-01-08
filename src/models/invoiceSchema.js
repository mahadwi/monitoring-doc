import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  ticket: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
  paymentMethod: { type: String, enum: ['QRIS', 'VA'], required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], required: true },
  amount: { type: Number, required: true },
  transactionId: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;
