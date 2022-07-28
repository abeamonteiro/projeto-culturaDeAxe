const express = require("express");
const cors = require('cors');
const index = require("./routes/index");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const mongoose = require("./Database/mongooseConnect");
require('dotenv-safe').config()
const app = express()
const terreiros = require("./Routes/terreiroRoutes")
const atividades = require("./Routes/atividadesRoutes")

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json())
mongoose.connect()
app.use("/", index);
app.use("/terreiro", terreiros)
app.use("/atividades", atividades)

module.exports = app