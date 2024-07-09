import app from "./app/app.js";

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});