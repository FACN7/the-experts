const databaseConnection = require("../database/db_connection.js");

const addjob = (job, cb) => {
  databaseConnection.query(
    `INSERT INTO jobs (job)
        VALUES ($1);`,
    [job],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = addjob;
