import mongoose from 'mongoose';
import app from './app.js';

const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/mockDB';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
  }
};

connectDB();
