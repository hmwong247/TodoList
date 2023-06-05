const express = require("express");
const app = express();
port = 8000;

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

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
