const databaseConnection = require("../database/db_connection.js");

const getContractor = (name, cb) => {
  databaseConnection.query(
    `SELECT * FROM Contractor WHERE job=$1 ORDER BY rating DESC;`,
    [name],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = getContractor;
