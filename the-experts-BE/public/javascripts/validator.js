const { check } = require("express-validator");

const checkArray = [
  check("first_name")
    .not()
    .isEmpty()
    .isLength({ min: 3 })
    .withMessage("Name must have more than 3 characters"),
  check("last_name")
    .not()
    .isEmpty()
    .isLength({ min: 4 })
    .withMessage("Name must have more than 3 characters"),
  check("email", "Your email is not valid")
    .not()
    .isEmpty()
    .isEmail()
    .normalizeEmail(),
  check("user_password", "Your password must be at least 5 characters")
    .not()
    .isEmpty()
    .isLength({ min: 8 })
];

module.exports = checkArray;
