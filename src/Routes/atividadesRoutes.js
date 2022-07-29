const express = require("express");
const atividadeController = require("../Controller/atividadesController")

const router = express.Router();

router.post("/novaAtividade", atividadeController.createActivity);
router.get("/listaAtividades", atividadeController.getAllActivities);
router.patch("/atividadePorId/:id", atividadeController.updateActivityById);
router.delete("/:id", atividadeController.deleteActivityById);

module.exports = router