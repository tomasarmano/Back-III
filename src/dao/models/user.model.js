import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  name: String,
  reference: String,
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  documents: [documentSchema],
  last_connection: { type: Date },
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
