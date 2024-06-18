const express = require("express");
const app = express();
const port = 3000;
const dataRouter = require("./routes/data");

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/data', dataRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
