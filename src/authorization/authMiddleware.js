const ensureToken = async (req, res, next) => {

  const authorizationHeader = req.headers['authorization'];

  if (typeof authorizationHeader !== 'undefined') {
    const auth = authorizationHeader.split(' ');

    if (auth.length == 2 && auth[0] === 'Bearer') {
      const authToken = auth[1];
      req.token = authToken;
      next();

    } else {
      res.status(400).send({ error: 'Token format is incorrect' });
    }
  } else {
    res.status(401).send({ error: 'Token not provided' });
  }
};


export { ensureToken };