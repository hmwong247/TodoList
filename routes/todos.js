const express = require("express");
const router = express.Router();

const { Client } = require("pg");

async function insertTodo(item) {
    const db = new Client({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWD,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        database: process.env.POSTGRES_DATABASE,
    });
    try {
        await db.connect();
        const res = await db.query(
            "insert into todos (context, created) values ($1, current_timestamp);",
            [item]
        );
    } catch (ex) {
        throw ex;
    } finally {
        db.end();
    }
}

async function deleteTodo(id) {
    const db = new Client({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWD,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        database: process.env.POSTGRES_DATABASE,
    });
    try {
        await db.connect();
        const result = await db.query("delete from todos where id=$1", [id]);
    } catch (ex) {
        throw ex;
    } finally {
        await db.end();
    }
}

router.post("/", async (req, res) => {
    let item = req.body.todoInput.trim();
    if (item) {
        await insertTodo(item);
    }
    res.redirect("/");
});

router.post("/delete/:id", async (req, res) => {
    await deleteTodo(req.params.id);
    res.redirect("/");
});

module.exports = router;
