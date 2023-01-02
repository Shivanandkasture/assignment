const express = require('express');
const router = express.Router();

const Register = require('../controller/registerController');
const getuser = require('../controller/registerController');
const Login = require('../controller/loginController')

router.post('/register',  Register.createRegister)
router.get('/getregister', getuser.getData)

router.post('/login', Login.userLogin)

module.exports = router