const dotenv = require("dotenv");
const express = require("express");
const session = require("express-session");

dotenv.config();

const router = require("./app/router");
const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // ça fait une heure
    },
  })
);

app.use(router);

app.use((request, response) => {
  response.status(404).render("404", { css: "404" });
});

const PORT = process.env.PG;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
