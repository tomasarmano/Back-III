import { Router } from 'express';
import PetModel from '../models/pet.model.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Gestión de mascotas
 */

/**
 * @swagger
 * /pets:
 *   get:
 *     summary: Obtener lista de mascotas
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de mascotas
 */
router.get('/', async (req, res) => {
  try {
    const pets = await PetModel.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mascotas' });
  }
});

/**
 * @swagger
 * /pets/{pid}:
 *   get:
 *     summary: Obtener mascota por ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mascota encontrada
 *       404:
 *         description: Mascota no encontrada
 */
router.get('/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const pet = await PetModel.findById(pid);
    if (!pet) return res.status(404).json({ error: 'Mascota no encontrada' });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mascota' });
  }
});

export default router;
