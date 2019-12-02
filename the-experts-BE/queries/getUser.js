const databaseConnection = require("../database/db_connection.js");

const getUser = (email, cb) => {
  databaseConnection.query(
    `SELECT * FROM Users WHERE email=$1`,
    [email],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = getUser;
