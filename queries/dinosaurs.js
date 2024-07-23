const db = require("../db/dbConfig");

const getAllDinos = async () => {
    try {
        const allDinos = await db.any("SELECT * FROM dinos");
        return allDinos;
    } catch (error) {
        return error;
    }
};

//get dino by name
const getDino = async (name) => {
    const query = 'SELECT * FROM dinosaurs WHERE name = $1';
  
    try {
        const dino = await db.oneOrNone(query, [name]);
        return dino;
    } catch (err) {
        console.error('Cant Find Dino try Again', err);
        return null;
    }
};

// create dino
const createDino = async (name, era, diet, length, weight, habitat, year_discovered, bipedal) => {
    const query = `
        INSERT INTO dinos (name, era, diet, length, weight, habitat, year_discovered, bipedal)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
    `;

    try {
        const newDino = await db.one(query, [name, era, diet, length, weight, habitat, year_discovered, bipedal]);
        return newDino;
    } catch (error) {
        console.error('cannot create dino Try again:', error);
        return null;
    }
};


module.exports = {
    getAllDinos,
    getDino,
    createDino

}