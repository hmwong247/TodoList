require('dotenv').config();
const express = require("express");
const app = express();
port = process.env.APP_PORT;

// debug variable
global.todos = ["eat", "work", "sleep"];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routers
const indexRouter = require("./routes/index");
const todosRouter = require("./routes/todos");

app.use("/", indexRouter);
app.use("/todos", todosRouter);

// 404 page
app.use((req, res) => {
    res.status(404).render("404", {url: req.url});
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
