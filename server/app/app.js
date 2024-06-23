const express = require("express");
const app = express();
const dataRouter = require("../routes/data");
const {cors, logger, response} = require("../middleware/index");

app.use(express.json());
app.use(logger);
app.use(cors);
app.use(response);

app.use('/data', dataRouter);

module.exports = app;
