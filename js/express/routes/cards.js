const express = require("express");
const router = express.Router();

require("../data/flashCardData.json")

router.get("/", (req, res) => {
    res.locals.prompt = "Who is buried in the gorund?";
    res.locals.hint = "Think about a tomb.";
    res.render("card");
});

module.exports = router;