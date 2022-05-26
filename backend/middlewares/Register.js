const { body, validationResult } = require("express-validator");

exports.RegisterValidation = [
  body("name", "please enter a name").notEmpty(),
  body("email", "should be a valid email").isEmail(),
  body("password", "should be at least 8 caracters ").isLength({ min: 8 }),

];

exports.LoginValidation = [
  body("email", "Email incorrect").isEmail(),
  body("password", "password incorrect ").isLength({ min: 8 }),
];


