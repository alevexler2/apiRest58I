const express = require('express');
const { getAllUsers, createUser } = require('../controllers/user.controller');

const route = express();

route.get('/', getAllUsers);
route.post('/', createUser);

module.exports = route;
