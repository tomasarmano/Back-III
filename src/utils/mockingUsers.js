import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

const roles = ['user', 'admin'];

export function generateMockUsers(quantity) {
  const users = [];

  for (let i = 0; i < quantity; i++) {
    const hashedPassword = bcrypt.hashSync('coder123', 10);

    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: roles[Math.floor(Math.random() * roles.length)],
      pets: []
    });
  }

  return users;
}
