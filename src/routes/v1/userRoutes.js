const { postUserHandler } = require('../../handler');

const postUser = {
  method: 'POST',
  path: '/v1/user',
  handler: postUserHandler,
};

module.exports = { postUser };
