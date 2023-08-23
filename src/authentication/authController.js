import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


/* *** GET *** */
/* Returns a login form with only a password field */
/* When you are already logged in redirects to /scrape */
/* The form does a POST request to /admin */

const passwordAdmin = async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
};


/* *** POST *** */
/* Logs in the admin user */

const loginAdmin = async (req, res, next) => {
  try {

    /* TEMPLATE */

    // Dummy data
    const users = [{
      email: "vincent@vincentlab.net",
      password: "$2b$15$zqY2Q4eOoGzFpZkHJz9HS.BSfXc/HM2E/yTWa1awFmTMgN2bE72Uu",
      roles: ["admin", "editor", "viewer"]
    }];

    // Get to user from the database, if the user is not there return error
    let user = users.find(u => u.email === req.body.email);
    if (!user) throw new Error("Invalid email or password.");

    // Compare the password with the password in the database
    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) throw new Error("Invalid email or password.");

    const token = jwt.sign({
        id: user._id,
        roles: user.roles,
    }, "jwtPrivateKey", { expiresIn: "15m" });

    res.send({
        ok: true,
        token: token
    });


  } catch (err) {
    next(err);
  }
};

export { passwordAdmin, loginAdmin };