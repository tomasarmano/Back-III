export function generateMockPets(quantity = 50) {
    const pets = [];
    const types = ['Dog', 'Cat', 'Bird', 'Rabbit'];
  
    for (let i = 0; i < quantity; i++) {
      pets.push({
        _id: `mockPetId${i}`,
        name: `PetName${i}`,
        type: types[Math.floor(Math.random() * types.length)],
        age: Math.floor(Math.random() * 15) + 1,
      });
    }
  
    return pets;
  }
  