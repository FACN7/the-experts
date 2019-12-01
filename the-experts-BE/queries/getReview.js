const databaseConnection = require("../database/db_connection.js");

const getReview = (id, cb) => {
  databaseConnection.query(
    `SELECT * FROM Reviews WHERE contractor_id=$1`,
    [id],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = getReview;
