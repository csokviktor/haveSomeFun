const express = require("express");
const router = express.Router();

//routes
router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (!name) {
    res.redirect("/hello");
  } else {
    res.locals.userName = name;
    res.render("index");
  }
});

router.get("/hello", (req, res) => {
  if (req.cookies.username) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
});

router.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

module.exports = router;