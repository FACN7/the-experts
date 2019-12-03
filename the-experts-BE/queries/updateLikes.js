const databaseConnection = require("../database/db_connection.js");

const updateLikes = (id, cb) => {
  console.log(id);
  databaseConnection.query(
    `UPDATE Contractor SET likes=likes+1 WHERE id = $1`,
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

module.exports = updateLikes;
