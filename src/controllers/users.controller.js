import UserModel from '../models/user.model.js';

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await UserModel.findById(uid).select('-password');
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

export const uploadUserDocuments = async (req, res) => {
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
};
