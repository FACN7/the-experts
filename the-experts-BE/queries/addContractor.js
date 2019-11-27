const databaseConnection = require("../database/db_connection.js");

const addContractor = (name, job, cb, rating) => {
  databaseConnection.query(
    `INSERT INTO Contractor (cont_name,job,rating)
        VALUES ($1, $2,$3 );`,
    [name, job, rating],
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
