const Note = require('../models/Notes');

const { request, response } = require('express');

const getNotes = async (req = request, resp = response) => {
    const query = { activo: true };
    const notes = await Note.find(query).exec();
    return resp.status(200).json({ notes });
};

const getNote = async (req = request, resp = response) => {
    const { id } = req.params;
    const note = await Note.findById(id).exec();
    return resp.status(200).json({ note });
};

const createNote = async (req = request, resp = response) => {
    const { title, content, fecha, idUser } = req.body;
    const note = new Note({ title, content, fecha, idUser });

    await note.save();
    return resp.status(201).json({ note });
};

const updateNote = async (req = request, resp = response) => {
    const { id } = req.params;
    const note = await Note.findByIdAndUpdate(id, req.body).exec();
    return resp.status(200).json({ note });
};

const deleteNote = async (req = request, resp = response) => {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id).exec();
    return resp.status(200).json({ note });
};

module.exports = {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
};