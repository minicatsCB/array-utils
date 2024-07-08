import  express from "express";
const app = express();
import dataRouter from "../routes/data.js";
import { cors, logger, response, unexpectedError } from "../middleware/index.js";

app.use(express.json());
app.use(logger);
app.use(cors);
app.use(response);

app.get('/', (req, res) => {
    res.json({
    message: 'Welcome to the API',
    availableEndpoints: ['/data', '/data/:id']
    });
});
app.use('/data', dataRouter);

app.use(unexpectedError);

export default app;
