const bycrypt = require('bcryptjs');
const db = require('../../libs/db');

const postUserHandler = async (request, h) => {
  const { email, password } = request.payload;

  const salt = bycrypt.genSaltSync(10);
  const passwordHash = bycrypt.hashSync(password, salt);

  const postUser = await db('users').insert({
    email,
    password: passwordHash,
  });

  const postedUser = await db('users').where('id', postUser).first();
  console.log(postedUser);

  // const isSuccess = postedUser.filter((user) => user.id === postedUser.id).length > 0;

  // if (isSuccess) {
  // }

  const response = h.response({
    status: 'success',
    message: 'Register User Successfully!',
    data: postedUser,
  });
  response.code(201);
  return response;

  // const response = h.response({
  //   status: 'fail',
  //   message: 'Register User Failed!',
  // });
  // response.code(500);
  // return response;
};

const getAllUsersHandler = async (request, h) => {
  const users = await db('users');

  const response = h.response({
    status: 'success',
    message: 'Get Users Successfully!',
    data: users,
  });
  response.code(200);
  return response;
};

module.exports = { postUserHandler, getAllUsersHandler };
