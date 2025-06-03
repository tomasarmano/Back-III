import { Router } from 'express';
import upload from '../middlewares/multer.middlewares.js';
import {
  getUsers,
  getUserById,
  uploadUserDocuments,
} from '../controllers/users.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de usuarios
 */

router.get('/', getUsers);

router.get('/:uid', getUserById);

router.post('/:uid/documents', upload.array('documents'), uploadUserDocuments);

export default router;
