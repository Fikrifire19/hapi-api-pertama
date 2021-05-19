const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../libs/db');

const userLoginHandler = async (request, h) => {
  const { email, password } = request.payload;

  const userChecker = await db('users').where({ email }).first();

  const passwordChecker = await bycrypt.compare(password, userChecker.password);

  if (!userChecker && !passwordChecker) {
    const response = h.response({
      status: 'fail',
      message: 'Email or Password Wrong!',
    });
    response.code(405);
    return response;
  }

  const tokenLogin = jwt.sign(
    {
      id: userChecker.id,
      email: userChecker.email,
    }, 'papaganteng', {
      expiresIn: '1d',
    },
  );

  const response = h.response({
    status: 'success',
    message: 'User Login Successfully',
    tokenLogin,
  });
  response.code(201);
  return response;
};

module.exports = userLoginHandler;
