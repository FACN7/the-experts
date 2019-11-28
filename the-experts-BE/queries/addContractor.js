const databaseConnection = require("../database/db_connection.js");

const addContractor = (name, job, cb) => {
  databaseConnection.query(
    `INSERT INTO Contractor (cont_name,job)
        VALUES ($1, $2 );`,
    [name, job],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = addContractor;
