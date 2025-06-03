import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  name: String,
  reference: String,
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  age:       { type: Number, required: false },
  address:   { type: String, required: false },
  phone:     { type: String, required: false },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
