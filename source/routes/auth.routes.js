const express = require("express");
const router = express.Router();

const controllers = require("../controllers/auth.controllers");

// [POST] /auth/login 
router.post('/login',controllers.login);
// [POST] /auth/register
router.post('/register',controllers.register);

module.exports = router;