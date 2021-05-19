const {
  postUser, getAllUsers, getUserById, putUser, deleteUser,
} = require('./v1/userRoutes');

const userLogin = require('./v1/loginRoute');

const routes = [
  postUser,
  getAllUsers,
  getUserById,
  putUser,
  deleteUser,
  userLogin,
];

module.exports = routes;
