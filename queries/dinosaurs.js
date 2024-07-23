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





module.exports = {
    getAllDinos,
    getDino,
   
}