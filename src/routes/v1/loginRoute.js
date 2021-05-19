const userLoginHandler = require('../../handler/v1/login');

const userLogin = {
  method: 'POST',
  path: '/v1/login',
  handler: userLoginHandler,
};

module.exports = userLogin;
