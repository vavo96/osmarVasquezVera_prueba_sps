const User = require('../models/Users');
const Note = require('../models/Notes');

const existeUsuarioPorId = async (id) => {

    // Verificar si el usuario existe
    const existeUsuario = await User.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`);
    }
}

const userExiste = async (nombre = '') => {

    // Verificar si el nombre existe
    const existeNombreUsr = await User.findOne({ nombre });
    if (existeNombreUsr) {
        throw new Error(`El nombre: ${nombre}, ya está registrado`);
    }
}

const existeNotePorId = async (id) => {

    // Verificar si la nota existe
    const existeNote = await Note.findById(id);
    if (!existeNote) {
        throw new Error(`El id no existe ${id}`);
    }
}

const validarFecha = async (fecha) => {

    // Verificar si la nota existe
    const date = new Date(fecha);
    if (!date.getTime()) {
        throw new Error(`La fecha ${fecha} no es valida`);
    }
}
module.exports = {
    existeUsuarioPorId,
    existeNotePorId,
    userExiste,
    validarFecha
}