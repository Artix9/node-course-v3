require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("631b3741c4b30f462d8a4da8")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("631b3741c4b30f462d8a4da8")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
