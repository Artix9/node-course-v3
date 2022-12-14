const express = require("express");
require("./db/mongoose");
const jwt = require("jsonwebtoken");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "test", { expiresIn: "7 days" });
  console.log(token);

  const data = jwt.verify(token, "test");
  console.log(data);
};

myFunction();
