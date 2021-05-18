const { postRegisterHandler } = require('../../handler');

const postRegister = {
  method: 'POST',
  path: '/v1/user',
  handler: postRegisterHandler,
};

module.exports = { postRegister };
