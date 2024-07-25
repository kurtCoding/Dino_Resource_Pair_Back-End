const db = require("../db/dbConfig");

const getAllDinos = async () => {
    try {
        const allDinos = await db.any("SELECT * FROM dinos");
        return allDinos;
    } catch (error) {
        return error;
    }
};

const getDino = async (id) => {
    const query = 'SELECT * FROM dinos WHERE id = $1';

    try {
        const dino = await db.one(query, id);
        return dino;
    } catch (error) {
        console.error('Cant Find Dino try Again', error);
        return null;
    }
};

const createDino = async (dino) => {
    // const { name, era, diet, length, weight, habitat, year_discovered, bipedal } = dino;
    // const query = `
    //     INSERT INTO dinos (name, era, diet, length, weight, habitat, year_discovered, bipedal)
    //     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    //     RETURNING *
    // `;

    try {
        const newDino = await db.one(
            "INSERT INTO dinos (name, era, diet, length, weight, habitat, year_discovered, bipedal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
            [dino.name, dino.era, dino.diet, dino.length, dino.weight, dino.habitat, dino.year_discovered, dino.bipedal]);
            console.log(newDino);
        return newDino;
    } catch (error) {
        return error;
    }
};

const updateDino = async (id, dino) => {
    const { name, era, diet, length, weight, habitat, year_discovered, bipedal } = dino;
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
        const deletedDino = await db.one(query, id);
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