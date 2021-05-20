/* eslint-disable no-unused-vars */
const bycrypt = require('bcryptjs');
const Authorization = require('../../middleware/authorization');
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
  // console.log(postedUser);

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
  const auth = await Authorization(request, h);

  const users = await db('users');

  const response = h.response({
    status: 'success',
    message: 'Get Users Successfully!',
    data: users,
  });
  response.code(200);
  return response;
};

const getUserByIdHandler = async (request, h) => {
  const auth = await Authorization(request, h);

  const { id } = request.params;

  const getUserById = await db('users').where({ id }).first();
  console.log(getUserById);

  // const filterUser = Object.entries(getUserById);
  // console.log(filterUser);
  // const user = filterUser.filter(([key, value]) => value === id);
  // console.log(user);

  if (getUserById !== undefined) {
    const response = h.response({
      status: 'success',
      message: 'Get User By Id Successfully!',
      data: getUserById,
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Get User By Id Failed!',
  });
  response.code(404);
  return response;
};

const putUserHandler = async (request, h) => {
  const auth = await Authorization(request, h);

  const { id } = request.params;

  const { email, password } = request.payload;

  const salt = bycrypt.genSaltSync(10);
  const passwordHash = bycrypt.hashSync(password, salt);

  const updateUser = await db('users')
    .where({ id })
    .update({
      email,
      password: passwordHash,
    });

  const updatedUser = await db('users')
    .where({ id }).first();

  const response = h.response({
    status: 'success',
    message: 'Update User Successfully',
    data: updatedUser,
  });
  response.code(201);
  return response;
};

const deleteUserHandler = async (request, h) => {
  const auth = await Authorization(request, h);

  const { id } = request.params;

  const deleteUser = await db('users').where({ id }).del();

  const response = h.response({
    status: 'success',
    message: `Delete User ${id} Successfully!`,
  });
  response.code(200);
  return response;
};

module.exports = {
  postUserHandler, getAllUsersHandler, getUserByIdHandler, putUserHandler, deleteUserHandler,
};
