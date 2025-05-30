import { Router } from 'express';
import UserModel from '../models/user.model.js';
import PetModel from '../models/pet.model.js';
import { generateMockUsers } from '../utils/mockUsers.js';
import { generateMockPets } from '../utils/mockPets.js';

const router = Router();

router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(50);
  res.json(pets);
});

router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.json(users);
});

router.post('/generateData', async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const usersToInsert = generateMockUsers(users);
    const petsToInsert = generateMockPets(pets);

    const insertedUsers = await UserModel.insertMany(usersToInsert);
    const insertedPets = await PetModel.insertMany(petsToInsert);

    res.json({
      message: `Insertados ${insertedUsers.length} usuarios y ${insertedPets.length} mascotas.`,
      users: insertedUsers,
      pets: insertedPets,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al insertar datos mock', details: error.message });
  }
});

export default router;
