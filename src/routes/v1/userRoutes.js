const { postUserHandler, getAllUsersHandler } = require('../../handler');

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

module.exports = { postUser, getAllUsers };
