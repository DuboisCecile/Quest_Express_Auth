const authCheckRouter = require("express").Router();
const User = require("../models/user");

authCheckRouter.post("/checkCredentials", (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email).then((user) => {
    if (!user) res.status(401).send("This email doesn't exist");
    else {
      User.verifyPassword(password, user.hashedPassword).then(
        (passwordIsCorrect) => {
          if (passwordIsCorrect) res.send("Ok, email and password are valid !");
          else res.status(401).send("Oops... Invalid password...");
        }
      );
    }
  });
});

module.exports = authCheckRouter;
