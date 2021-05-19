const {
  postUserHandler, getAllUsersHandler, getUserByIdHandler, putUserHandler, deleteUserHandler,
} = require('../../handler/v1/userHandler');

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

const deleteUser = {
  method: 'DELETE',
  path: '/v1/users/{id}',
  handler: deleteUserHandler,
};

module.exports = {
  postUser, getAllUsers, getUserById, putUser, deleteUser,
};
