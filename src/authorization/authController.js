import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;

const secretKey = process.env.JWT_SECRET_KEY

/* *** GET *** */
/* Returns a login form with only a password field */
/* When you are already logged in redirects to /scrape */
/* The form does a POST request to /admin */

const passwordAdmin = async (req, res, next) => {
  jwt.verify(req.token, secretKey, function(err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        text: 'this is protected',
        data: data
      });
    }
  });
};


/* *** POST *** */
/* Logs in the admin user */

const loginAdmin = async (req, res, next) => {
  try {

    const { username, password } = req.body;
    
    // Authenticate User

    if (username === adminUsername && password === adminPassword) {
      jwt.sign(
        { username: username },
        secretKey,
        { expiresIn: '15m' },
        (err, token) => {
          if (err) {
            res.status(500).send({
              ok: false,
              message: 'Internal server error'
            });
          } else {
            res.send({
              ok: true,
              message: 'Login successful',
              token: token
            });
          }
        }
      );
    } else {
      res.status(401).send({
        ok: false,
        message: 'Username or password incorrect'
      });
    }
  } catch (err) {
    next(err);
  }
};

export { passwordAdmin, loginAdmin };