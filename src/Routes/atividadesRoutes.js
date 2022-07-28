const express = require("express");
const atividadeController = require("../Controller/atividadesController")

const router = express.Router();

/*router.get("/listaAtividades", atividadeController.getAllAtividades);
router.post("/novaAtividade", atividadeController.creatActivity);
router.put("/atividade/atividadePorTipo", atividadeController.updateActivityByType);
router.delete("atividade/terreiro", atividadeController.deleteActivityByTerreiro);*/

module.exports = router