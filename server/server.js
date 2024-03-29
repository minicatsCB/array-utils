const express = require("express");
const app = express();
const port = 3000;

const controller = require("./lib/controller");

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/data", (req, res) => {
    let data = controller.getData();
    console.log("Saved data until now:", data);
    res.send(data);
});

app.post("/", (req, res) => {
    let pluginType = req.header("X-Plugin-Type");
    let machineId = req.header("X-Machine-Id");
    let msg = `Data from plugin '${pluginType}' received successfully.`;
    console.log(msg);
    controller.saveData(req.body, pluginType, machineId);
    res.status(200).send(msg);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
