const { postUserHandler, getAllUsersHandler, getUserByIdHandler } = require('../../handler');

const postUser = {
  method: 'POST',
  path: '/v1/user',
  handler: postUserHandler,
};

const getAllUsers = {
  method: 'GET',
  path: '/v1/users/',
  handler: getAllUsersHandler,
};

const getUserById = {
  method: 'GET',
  path: '/v1/users/{id}',
  handler: getUserByIdHandler,
};

module.exports = { postUser, getAllUsers, getUserById };
