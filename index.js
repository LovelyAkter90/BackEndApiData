const express = require("express");
const chalk = require("chalk");
const userRouter = require("./Controllers/userRouter");
const cors = require("cors");
const router = require("./Controllers/userRouter");
const app = express();

///middleware work
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", userRouter);

app.listen(8000, () => {
  console.log(chalk.cyan("Server is running on 8000 port"));
});
