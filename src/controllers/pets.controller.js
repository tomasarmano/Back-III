import PetModel from '../models/pet.model.js';

export const getPets = async (req, res) => {
  try {
    const pets = await PetModel.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mascotas' });
  }
};

export const getPetById = async (req, res) => {
  try {
    const { pid } = req.params;
    const pet = await PetModel.findById(pid);
    if (!pet) return res.status(404).json({ error: 'Mascota no encontrada' });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mascota' });
  }
};
