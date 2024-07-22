const db = require("../db/dbConfig");

const getAllDinos = async () => {
    try {
        const allDinos = await db.any("SELECT * FROM dinos");
        return allDinos;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllDinos };