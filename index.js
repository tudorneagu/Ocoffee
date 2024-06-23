const dotenv = require("dotenv");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const emailjs = require("@emailjs/nodejs");

dotenv.config();

const router = require("./app/router");
const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // ça fait une heure
    },
  })
);

app.use((req, res, next) => {
  console.log("Session:", req.session);
  next();
});

app.use(router);

app.use((request, response) => {
  response.status(404).render("404", { css: "404" });
});

const PORT = process.env.PG;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
