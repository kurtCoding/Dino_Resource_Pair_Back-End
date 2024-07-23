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
        const dino = await db.one(query, [name]);
        return dino;
    } catch (err) {
        console.error('Cant Find Dino try Again', err);
        return null;
    }
};



// create  a new dino
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



//Update Dino 

const updateDino = async (id, name, era, diet, length, weight, habitat, year_discovered, bipedal) => {
    const query = `
        UPDATE dinos
        SET name = $2, era = $3, diet = $4, length = $5, weight = $6, habitat = $7, year_discovered = $8, bipedal = $9
        WHERE id = $1
        RETURNING *;
    `;

    try {
        const updatedDino = await db.one(query, [id, name, era, diet, length, weight, habitat, year_discovered, bipedal]);
        return updatedDino;
    } catch (error) {
        console.error('Error updating dinosaur:', error);
        return null;
    }
};

const deleteDino = async (id) => {
    const query = `
        DELETE FROM dinos
        WHERE id = $1
        RETURNING *;
    `;

    try {
        const deletedDino = await db.one(query, [id]);
        return deletedDino;
    } catch (error) {
        console.error('Error deleting dinosaur:', error);
        return null;
    }
};




module.exports = {
    getAllDinos,
    getDino,
    createDino,
    updateDino,
    deleteDino  
}