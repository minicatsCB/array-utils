import app from "./app/app.js";

const port = process.env.port || 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});