const db = require('../../libs/db');

const postRegisterHandler = async (request, h) => {
  const { email, password } = request.payload;

  const postUser = await db('users').insert({
    email,
    password,
  });

  const postedUser = await db('users').where('id', postUser).first();
  console.log(postedUser);

  const response = h.response({
    status: 'success',
    message: 'Register User Successfully!',
    data: postedUser,
  });
  response.code(201);
  return response;
};

module.exports = { postRegisterHandler };
