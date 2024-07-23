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

// New route for getting a dinosaur by name 
dinos.get('/:name', async (req, res) => {
    const name = req.params.name;
    const dino = await getDino(name);
    if (dino) {
      res.status(200).json(dino);
    } else {
      res.status(404).json({ error: 'Dinosaur not found try again' });
    }
  });

module.exports = dinos;