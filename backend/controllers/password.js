const { forgotPassword, resetPassword, activateEmail } = require("../controllers/user/password");
const express = require("express");


const passwordRoute = express.Router();

// user forgot password route
passwordRoute.post('/forgot', forgotPassword)
// user reset password route
passwordRoute.post('/reset',resetPassword)
passwordRoute.put('/activation', activateEmail)
module.exports = passwordRoute;
