require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("631c99cc36608bfe4535de9e", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
