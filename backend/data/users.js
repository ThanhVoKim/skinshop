const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    isAmin: true,
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'user1',
    email: 'user1@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = users;
