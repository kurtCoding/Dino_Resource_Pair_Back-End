const express = require("express");
const dinos = express.Router();
const {
    getAllDinos,
    getDino,
    createDino,
    deleteDino,
    updateDino
} = require("../queries/dinosaurs.js");
const { checkName, checkBoolean } = require("../validations/dinoCheck.js");   

dinos.get("/", async (req, res) => {
    const allDinos = await getAllDinos();
    if (allDinos[0]) {
        res.status(200).json(allDinos);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

dinos.get("/:id", async (req, res) => {
    const { id } = req.params;
    const dino = await getDino(id);
    if (dino) {
      res.status(200).json(dino);
    } else {
      res.status(404).json({ error: 'Dinosaur not found try again' });
    }
  });

dinos.post("/", checkName, checkBoolean, async (req, res) => {
    const dino = await createDino(req.body);
    res.json(dino);
});

dinos.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedDino = await deleteDino(id);
    if (deletedDino.id) {
        res.status(200).json(deletedDino);
    } else {
        res.status(404).json("Dino not found");
    }
});

dinos.put("/:id", checkName, checkBoolean, async (req, res) => {
    const { id } = req.params;
    try {
        const updatedDino = await updateDino(id, req.body);
        res.status(200).json(updatedDino);
    } catch (error) {
        res.status(404).json({ error: `No dino with the id ${id} exists` });
    }
});

module.exports = dinos;