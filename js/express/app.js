const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const mainRoutes = require("./routes/index.js");
const cardRoutes = require("./routes/cards.js");

app.use(mainRoutes);
app.use('/cards', cardRoutes)

//error handling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
  console.log("The application is running.");
});
