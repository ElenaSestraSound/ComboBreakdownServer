const ensureToken = async (req, res, next) => {

  const authorizationHeader = req.headers['authorization'];

  if (typeof authorizationHeader !== 'undefined') {

    const auth = authorizationHeader.split(' ');
    const authToken = auth[1];
    req.token = authToken;
    next();

  } else {
    res.status(403);
  }
};


export { ensureToken };