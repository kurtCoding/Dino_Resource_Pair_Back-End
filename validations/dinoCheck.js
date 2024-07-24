const checkName = (req, res, next) => {
    if (req.body.name) {
        return next();
    } else {
        res.status(400).json({ error: "Name is required" });
    }
};

const checkBoolean = (req, res, next) => {
    if (
        typeof req.body.bipedal === "boolean" ||
        req.body.bipedal === "true" ||
        req.body.bipedal === undefined ||
        req.body.bipedal === "false"
    ) {
        next();
    } else {
        res.status(400).json({ error: "bipedal must be a boolean value" });
    }
};

module.exports = { checkName, checkBoolean };