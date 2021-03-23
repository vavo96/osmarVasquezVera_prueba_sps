const { Router } = require('express');
const { check } = require('express-validator');
const { getNotes, getNote, createNote, updateNote, deleteNote } = require('../controllers/notes');
const { existeNotePorId, existeUsuarioPorId, validarFecha } = require('../helpers/db-validators');
const { validarCampos } = require('../middleware/validators');

const router = Router();
router.get('/', getNotes);

router.get('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeNotePorId),
    validarCampos
], getNote);

router.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('content', 'El contenido es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('idUser', 'El usuario es obligatorio').not().isEmpty(),
    check('idUser', 'No es un ID válido').isMongoId(),
    check('idUser').custom(existeUsuarioPorId),
    check('fecha').custom(validarFecha),
    validarCampos
], createNote);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeNotePorId),
    validarCampos
], updateNote);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeNotePorId),
    validarCampos
], deleteNote);

module.exports = router;