import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  role: String,
  pets: [mongoose.Schema.Types.ObjectId]
});

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
