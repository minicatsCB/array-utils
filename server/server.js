const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
