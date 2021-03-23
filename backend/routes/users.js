const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validators');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');
const { existeUsuarioPorId, userExiste } = require('../helpers/db-validators');

const router = Router();

router.get('/', getUsers);

router.get('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], getUser);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(userExiste),
    validarCampos
], createUser);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], updateUser);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], deleteUser);

module.exports = router;