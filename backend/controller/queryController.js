const QueryModel = require("../mongo");



exports.sendQuery = async (req, res) => {
    try {
        const { name, email, phone, msg } = req.body;
        const newQuery = new QueryModel({ name, email, phone, msg });
        const savedQuery = await newQuery.save();
        res.status(201).json(savedQuery);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
