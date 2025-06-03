import AdoptionModel from '../models/adoption.model.js';

export const getAdoptions = async (req, res) => {
  try {
    const adoptions = await AdoptionModel.find();
    res.json(adoptions);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener adopciones' });
  }
};

export const getAdoptionById = async (req, res) => {
  try {
    const { aid } = req.params;
    const adoption = await AdoptionModel.findById(aid);
    if (!adoption) return res.status(404).json({ error: 'Adopción no encontrada' });
    res.json(adoption);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener adopción' });
  }
};
