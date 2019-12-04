const databaseConnection = require("../database/db_connection.js");

const getReview = cb => {
  databaseConnection.query(`SELECT * FROM jobs`, (err, res) => {
    if (err) {
      return cb(err);
    } else {
      cb(null, res);
    }
  });
};

module.exports = getReview;
