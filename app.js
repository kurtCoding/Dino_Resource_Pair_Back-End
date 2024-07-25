const cors = require("cors");
const express = require("express");

const dinoController = require("./controllers/dinoController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the DinoSite!!");
});

app.use("/dinos", dinoController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;