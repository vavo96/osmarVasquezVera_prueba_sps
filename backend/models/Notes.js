const { Schema, model } = require('mongoose');


const NotesSchema = Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    fecha: {
        type: Date
    },
    activo: {
        type: Boolean,
        default: true
    },
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = model('Note', NotesSchema);
