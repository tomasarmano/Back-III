import { Router } from 'express';
import { getPets, getPetById } from '../controllers/pets.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Gestión de mascotas
 */

router.get('/', getPets);

router.get('/:pid', getPetById);

export default router;
