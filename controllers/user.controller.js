const userService = require('../services/user.services');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    res.status(404).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllUsers,
  createUser,
}