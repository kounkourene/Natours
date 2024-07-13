const express = require("express");

const morgan = require("morgan");

const app = express();
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use((req, resp, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
