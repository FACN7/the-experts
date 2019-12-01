const databaseConnection = require("../database/db_connection.js");

const addUser = ({ first_name, last_name, email, user_password }, cb) => {
  databaseConnection.query(
    `INSERT INTO Users (first_name, last_name, email, user_password)
        VALUES ($1, $2,$3,$4 );`,
    [first_name, last_name, email, user_password],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = addUser;
