import { Router } from 'express';
import UserModel from '../models/user.model.js';
import upload from '../middlewares/multer.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de usuarios
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener lista de usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

/**
 * @swagger
 * /users/{uid}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await UserModel.findById(uid).select('-password');
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
});

/**
 * @swagger
 * /users/{uid}/documents:
 *   post:
 *     summary: Subir documentos para usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               documents:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Documentos subidos
 *       400:
 *         description: No se subieron archivos
 */
router.post('/:uid/documents', upload.array('documents'), async (req, res) => {
    try {
      const userId = req.params.uid;
      const user = await UserModel.findById(userId);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  
      const docs = req.files.map(file => ({
        name: file.originalname,
        reference: file.path,
      }));
  
      user.documents.push(...docs);
      await user.save();
  
      res.json({ message: 'Documentos subidos correctamente', documents: user.documents });
    } catch (error) {
      res.status(500).json({ error: 'Error subiendo documentos' });
    }
  });
  
  export default router;