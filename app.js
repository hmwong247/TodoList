const express = require("express");
const app = express();
port = 8000

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("index");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});