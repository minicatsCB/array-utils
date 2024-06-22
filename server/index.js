const app = require("./app/app");

const port = process.env.port || 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});