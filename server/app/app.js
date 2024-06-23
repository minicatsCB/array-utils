const express = require("express");
const app = express();
const dataRouter = require("../routes/data");
const {cors, logger, response, unexpectedError} = require("../middleware/index");

app.use(express.json());
app.use(logger);
app.use(cors);
app.use(response);

app.use('/data', dataRouter);

app.use(unexpectedError);

module.exports = app;
