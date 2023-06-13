const express = require("express");
const router = express.Router();

const { Client } = require("pg");

router.get("/", async (req, res) => {
    let results;
    const db = new Client({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWD,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        database: process.env.POSTGRES_DATABASE,
    });
    try {
        await db.connect();
        const { rows } = await db.query("select * from todos;");
        results = rows;
        console.table(results);
    } catch (ex) {
        throw ex;
    } finally {
        await db.end();
    }

    res.render("index", { todos: results });
});

module.exports = router;
