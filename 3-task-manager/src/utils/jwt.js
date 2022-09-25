const jwt = require("jsonwebtoken");

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, "jwtSecret", {
    expiresIn: "7 days",
  });
  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, "jwtSecret");

module.exports = { createJWT, isTokenValid };
