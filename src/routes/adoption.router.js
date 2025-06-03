import { Router } from 'express';
import { getAdoptions, getAdoptionById } from '../controllers/adoption.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Adoptions
 *   description: Gestión de adopciones
 */

router.get('/', getAdoptions);

router.get('/:aid', getAdoptionById);

export default router;
