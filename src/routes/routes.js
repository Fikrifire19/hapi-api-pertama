const { postUser, getAllUsers, getUserById, putUser } = require('./v1/userRoutes');

const routes = [
  postUser, getAllUsers, getUserById, putUser
];

module.exports = routes;
