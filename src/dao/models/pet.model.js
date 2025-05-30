import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true }, 
  breed: String,
  age: Number,
  description: String,
  status: { type: String, enum: ['available', 'adopted'], default: 'available' },
  photos: [String], 
}, { timestamps: true });

const PetModel = mongoose.model('Pet', petSchema);

export default PetModel;
