const express = require("express");
const app = express();
const port = 3000;

const controller = require("./lib/controller");

app.use(express.json());

app.get("/data", (req, res) => {
    let data = controller.getData();
    console.log("Saved data until now:", data);
    res.send(data);
});

app.post("/", (req, res) => {
    console.log("Received data:", JSON.stringify(req.body));
    controller.saveData(JSON.stringify(req.body));
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
