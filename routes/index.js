const moviesRouter = require("./movies");
const usersRouter = require("./users");
const authCheckRouter = require("./auth");

const setupRoutes = (app) => {
  app.use("/api/movies", moviesRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/auth", authCheckRouter);
};

module.exports = {
  setupRoutes,
};
