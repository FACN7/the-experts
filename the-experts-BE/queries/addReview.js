const databaseConnection = require("../database/db_connection.js");

const addReview = ({ user_id = 1, contractor_id, reviewBody, isliked }, cb) => {
  databaseConnection.query(
    `INSERT INTO Reviews (user_id,contractor_id,reviewBody,isliked)
        VALUES ($1, $2,$3,$4);`,
    [user_id, contractor_id, reviewBody, isliked],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = addReview;
