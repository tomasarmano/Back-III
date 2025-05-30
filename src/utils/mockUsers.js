import bcrypt from 'bcrypt';

const roles = ['user', 'admin'];

export function generateMockUsers(quantity = 50) {
  const users = [];
  for (let i = 0; i < quantity; i++) {
    const role = roles[Math.floor(Math.random() * roles.length)];
    const passwordHash = bcrypt.hashSync('coder123', 10);
    users.push({
      _id: `mockUserId${i}`,  
      firstName: `UserFirstName${i}`,
      lastName: `UserLastName${i}`,
      email: `user${i}@mock.com`,
      password: passwordHash,
      role,
      pets: [],
    });
  }
  return users;
}
