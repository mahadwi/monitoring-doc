/* eslint-disable func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema(
  {
    nama: { type: String },
    email: { type: String, unique: true, lowercase: true },
    noHp: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: true,
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', (next) => {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
