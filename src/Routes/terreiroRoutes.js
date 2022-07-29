const express = require("express");
const terreiroController = require("../Controller/terreiroController")
const usuarioController = require("../Controller/usuarioController")

const router = express.Router();

router.post("/novoTerreiro", terreiroController.createTerreiro);
router.get("/listaTerreiros", terreiroController.getAllTerreiros);
router.get("/terreiros/:id", terreiroController.getTerreiroById);
router.get("/tipoAtividade", terreiroController.getTypeActivity);
router.get("/responsavel", terreiroController.getTerreiroByResp);
router.patch("/:id", terreiroController.updateTerreiro);
router.delete("/terreiro/:id", terreiroController.deleteTerreiro);

router.post("/user", usuarioController.criarUsuario);
router.post("/user", usuarioController.listarUsuarios);
router.post("/user/login", usuarioController.login);
router.delete("/user/:id", usuarioController.deletarUsuario);


module.exports = router