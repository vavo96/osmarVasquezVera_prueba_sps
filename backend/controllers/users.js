const User = require('../models/Users');
const { request, response } = require('express');

const getUsers = async (req = request, resp = response) => {
    const query = { activo: true };
    const usuarios = await User.find(query);
    return resp.status(200).json({ usuarios });
};

const getUser = async (req = request, resp = response) => {
    const { id } = req.params;
    const usuario = await User.findById(id).exec();
    return resp.status(200).json({ usuario });
};

const createUser = async (req = request, resp = response) => {
    const { nombre } = req.body;
    const user = new User({ nombre });

    await user.save();
    return resp.status(201).json({ user });
};

const updateUser = async (req = request, resp = response) => {
    const { id } = req.params;
    const usuario = await User.findByIdAndUpdate(id, req.body).exec();
    return resp.status(200).json({ usuario });
};

const deleteUser = async (req = request, resp = response) => {
    const { id } = req.params;
    const usuario = await User.findByIdAndDelete(id).exec();
    return resp.status(200).json({ usuario });
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};