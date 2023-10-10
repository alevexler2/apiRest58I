const UserCategory = require('../models/userCategoryModel');

const createUserCategory = async (name) => {
  const newCategory = await UserCategory.create({
    name
  });

  if (newCategory) {
    return newCategory;
  }

  throw new Error('An error has been raised');
}

module.exports = {
  createUserCategory
}