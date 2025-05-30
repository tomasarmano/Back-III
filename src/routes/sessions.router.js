import { Router } from 'express';
import UserModel from '../models/user.model.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Sessions
 *   description: Registro y login de usuarios
 */

/**
 * @swagger
 * /sessions/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado
 *       400:
 *         description: Error en la solicitud
 */
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await UserModel.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Usuario ya existe' });

    const newUser = new UserModel({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

/**
 * @swagger
 * /sessions/login:
 *   post:
 *     summary: Login de usuario
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *       401:
 *         description: Credenciales inválidas
 */
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });
  
      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) return res.status(401).json({ error: 'Credenciales inválidas' });
  
      user.last_connection = new Date();
      await user.save();
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ message: 'Login exitoso', token });
    } catch (error) {
      res.status(500).json({ error: 'Error en login' });
    }
  });
  
  router.post('/logout/:uid', async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.uid);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  
      user.last_connection = new Date();
      await user.save();
  
      res.json({ message: 'Logout exitoso' });
    } catch (error) {
      res.status(500).json({ error: 'Error en logout' });
    }
  });
  
  export default router;