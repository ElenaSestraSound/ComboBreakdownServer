import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const secretKey = process.env.JWT_SECRET_KEY;


const ensureToken = async (req, res, next) => {

  const authorizationHeader = req.headers['authorization'];

  if (authorizationHeader !== 'undefined') {

    const auth = authorizationHeader.split(' ');
    const authToken = auth && auth[1];
    if (authToken == null) return res.sendStatus(401);
  
    jwt.verify(authToken, secretKey, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    })
    
  }

};


export { ensureToken };