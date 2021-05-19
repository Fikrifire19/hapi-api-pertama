const { postUser, getAllUsers } = require('./v1/userRoutes');

const routes = [
  postUser, getAllUsers
];

module.exports = routes;
