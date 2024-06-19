const express = require("express");
const app = express();
const port = 3000;
const dataRouter = require("./routes/data");
const corsMiddleware = require("./middleware/cors");
const loggerMiddleware = require("./middleware/logger");

app.use(express.json());
app.use(loggerMiddleware);
app.use(corsMiddleware);

app.use('/data', dataRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
