import { Router } from 'express';
import upload from '../middlewares/multer.middlewares.js';

const router = Router();

router.post('/single', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se subió ningún archivo' });
  }
  res.status(200).json({ message: 'Archivo subido correctamente', file: req.file });
});

export default router;
