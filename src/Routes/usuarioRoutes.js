const express = require("express");
const usuarioController = require("../Controller/usuarioController")

const router = express.Router();

router.post("/user", usuarioController.criarUsuario);
router.post("/user", usuarioController.listarUsuarios);
router.post("/user/login", usuarioController.login);
router.delete("/user/:id", usuarioController.deletarUsuario);

module.exports = router