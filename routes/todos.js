const express = require("express");
const router = express.Router();

const { Client } = require("pg");
const db = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
});

router.post("/", (req, res) => {
    let item = req.body.todoInput.trim();
    if(item) {
        global.todos.push(item);
    }

    res.redirect("/");
});

router
    .route("/:id")
    .put((req, res) => {
        console.log("edited");

        res.redirect("/");
    })
    .delete((req, res) => {
        console.log("deleted");

        res.redirect("/");
    });

module.exports = router;
