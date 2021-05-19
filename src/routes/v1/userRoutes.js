const { postUserHandler, getAllUsersHandler, getUserByIdHandler, putUserHandler } = require('../../handler');

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

const putUser = {
  method: 'PUT',
  path: '/v1/users/{id}',
  handler: putUserHandler,
};

module.exports = { postUser, getAllUsers, getUserById, putUser };
