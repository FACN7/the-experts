const databaseConnection = require("../database/db_connection.js");

const getContractor = (name, cb) => {
  databaseConnection.query(
    `SELECT * FROM Contractor WHERE name=$1`,
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

module.exports = getbody;
