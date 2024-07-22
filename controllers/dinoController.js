const express = require("express");
const dinos = express.Router();
const {
    getAllDinos,
    getDino,
    createDino,
    deleteDino,
    updateDino
} = require("../queries/dinosaurs.js");
const { checkName } = require("../validations/dinoCheck.js");   

dinos.get("/", async (req, res) => {
    const allDinos = await getAllDinos();
    if (allDinos[0]) {
        res.status(200).json(allDinos);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = dinos;