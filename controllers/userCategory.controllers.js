const userCategoryService = require('../services/userCategory.services')
const UserCategory = require('../models/userCategoryModel');

const createUserCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newUserCategory = await userCategoryService.createUserCategory(name);
    res.status(201).json({ newUserCategory })
  } catch (error) {
    res.status(500).json({ error })
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await UserCategory.find().populate({
      path: 'users',
      select: 'name lastName email',
    });

    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUserCategory,
  getCategories
}