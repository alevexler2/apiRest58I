const express = require('express');
const { createUserCategory, getCategories } = require('../controllers/userCategory.controllers');

const route = express();

route.post('/', createUserCategory)
route.get('/', getCategories)

module.exports = route;