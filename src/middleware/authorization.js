const jwt = require('jsonwebtoken');

const Authorization = (request, h) => new Promise((resolve, reject) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return h.response({
      status: 'fail',
      message: 'Authorization is Required!',
    }).code(401);
  }

  const authSplit = authorization.split(' ');
  const [authType, authToken] = [
    authSplit[0],
    authSplit[1],
  ];

  if (authType !== 'Bearer') {
    const response = h.response({
      status: 'fail',
      message: 'Authorization Failed!',
    });
    response.code(401);
    return response;
  }

  return jwt.verify(authToken, 'papaganteng', (err, decoded) => {
    if (err) {
      const response = h.response({
        status: 'fail',
        message: 'Token is Wrong!',
      });
      response.code(401);
      return response;
    }

    return resolve(decoded);
  });
});

module.exports = Authorization;
