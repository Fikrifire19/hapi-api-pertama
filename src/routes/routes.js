const { postUser, getAllUsers, getUserById } = require('./v1/userRoutes');

const routes = [
  postUser, getAllUsers, getUserById
];

module.exports = routes;
