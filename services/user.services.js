const userCategoryModel = require('../models/userCategoryModel');
const Users = require('../models/userModel');

const getAllUsers = async () => {
  const users = await Users.find();

  if (users) {
    return users
  }

  throw new Error('An error has been raised');
};

const createUser = async ({ name, lastName, email, password, userCategory }) => {
  const newUser = new Users({
    name,
    lastName,
    email,
    password,
    userCategory,
  });

  await newUser.save()

  const category = await userCategoryModel.findById(userCategory);

  if (category) {
    category.users.push(newUser._id);
    await category.save();
  }

  await category.save();

  if (newUser) {
    return newUser;
  }

  throw new Error('Hubo un error al crear el nuevo usuario');
}

module.exports = {
  getAllUsers,
  createUser,
};
