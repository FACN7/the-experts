const databaseConnection = require("../database/db_connection.js");

const getUser = (user_id, cb) => {
  databaseConnection.query(
    `SELECT * FROM Users WHERE id=$1`,
    [user_id],
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
