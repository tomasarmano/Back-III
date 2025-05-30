import { Router } from 'express';
import AdoptionModel from '../models/adoption.model.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Adoptions
 *   description: Gestión de adopciones
 */

/**
 * @swagger
 * /adoptions:
 *   get:
 *     summary: Obtener lista de adopciones
 *     tags: [Adoptions]
 *     responses:
 *       200:
 *         description: Lista de adopciones
 */
router.get('/', async (req, res) => {
  try {
    const adoptions = await AdoptionModel.find();
    res.json(adoptions);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener adopciones' });
  }
});

/**
 * @swagger
 * /adoptions/{aid}:
 *   get:
 *     summary: Obtener adopción por ID
 *     tags: [Adoptions]
 *     parameters:
 *       - in: path
 *         name: aid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adopción encontrada
 *       404:
 *         description: Adopción no encontrada
 */
router.get('/:aid', async (req, res) => {
  try {
    const { aid } = req.params;
    const adoption = await AdoptionModel.findById(aid);
    if (!adoption) return res.status(404).json({ error: 'Adopción no encontrada' });
    res.json(adoption);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener adopción' });
  }
});

export default router;
