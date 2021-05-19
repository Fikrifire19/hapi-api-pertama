const { postUser, getAllUsers, getUserById, putUser, deleteUser } = require('./v1/userRoutes');

const routes = [
  postUser, getAllUsers, getUserById, putUser, deleteUser
];

module.exports = routes;
