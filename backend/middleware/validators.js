const { response } = require('express');
const validators = require('express-validator');

const validarCampos = (req, resp = response, next) => {
    const errores = validators.validationResult(req);
    if (!errores.isEmpty()) {
        return resp.status(404).json({
            ok: false,
            errors: errores.mapped()
        });
    }
    next();
}

module.exports = { validarCampos };