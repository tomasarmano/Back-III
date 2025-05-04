import { faker } from '@faker-js/faker';

export function generateMockPets(quantity) {
  const pets = [];

  for (let i = 0; i < quantity; i++) {
    pets.push({
      name: faker.animal.cat(),
      species: faker.animal.type(),
      birthDate: faker.date.past()
    });
  }

  return pets;
}
