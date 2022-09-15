require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("631b3741c4b30f462d8a4da8")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
