import { Router } from 'express';
import { generateMockPets } from '../utils/mockingPets.js';
import { generateMockUsers } from '../utils/mockingUsers.js';
import UserModel from '../dao/models/user.model.js';
import PetModel from '../dao/models/pet.model.js';

const router = Router();

router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(20);
  res.json({ status: 'success', payload: pets });
});

router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.json({ status: 'success', payload: users });
});

router.post('/generateData', async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  const mockUsers = generateMockUsers(Number(users));
  const insertedUsers = await UserModel.insertMany(mockUsers);

  const mockPets = generateMockPets(Number(pets));
  const insertedPets = await PetModel.insertMany(mockPets);

  res.json({
    status: 'success',
    message: 'Datos generados correctamente',
    usersInserted: insertedUsers.length,
    petsInserted: insertedPets.length,
  });
});

export default router;
