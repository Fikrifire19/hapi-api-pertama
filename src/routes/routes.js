const {
  postUser, getAllUsers, getUserById, putUser, deleteUser,
} = require('./v1/userRoutes');

const userLogin = require('./v1/loginRoute');

const postProduct = require('./v1/productRoutes');

const routes = [
  postUser,
  getAllUsers,
  getUserById,
  putUser,
  deleteUser,
  userLogin,
  postProduct,
];

module.exports = routes;
