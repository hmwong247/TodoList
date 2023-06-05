const express = require("express");
const router = express.Router();

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
