const db = require('../models');

// create main Model
const User = db.User;

// create a new User
module.exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send(newUser);

    } catch (error) {
        console.log(error);
    }
}

module.exports.getAllUsers = async (req, res) => {

    try {
        const allUsers = await User.findAll({ order: [['id', 'DESC']] });
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
    }
}

module.exports.getSingleUser = async (req, res) => {

    const id = req.params.id;
    try {
        const user = await User.findOne({ where: { id } })

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateUser = async (req, res) => {

    const id = req.params.id;

    try {
        // Update
        const [userUpdate] = await User.update(req.body, { where: { id } });

        if (!userUpdate) return res.status(404).json({ message: 'User not found' });

        // Fetching updated user
        const updatedUser = await User.findOne({ where: { id } });
        return res.status(200).json(updatedUser);

    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteUser = async (req, res) => {

    const id = req.params.id;
    try {

        const user = await User.findOne({ where: { id } });

        if (!user) return res.status(404).json({ message: 'User not found' });

        await User.destroy({ where: { id } });

        res.status(200).json({ message: `${user.firstName} is deleted !` });

    } catch (error) {
        console.log(error);
    }
}