import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  birthDate: Date
});

const PetModel = mongoose.model('Pet', petSchema);
export default PetModel;
