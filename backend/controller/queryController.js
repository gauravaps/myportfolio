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
  


exports.findAdmin = async (req, res) => {
    try {
        
        const { email } = req.body;

        // Validate email input
        if (!email) {
            return res.status(400).json({ message: "Email is required ." });
        }

        // Query to find the admin user with the provided email
        const adminUser = await QueryModel.findOne({ email, admin: true });

        // Check if admin user exists
        if (!adminUser) {
            return res.status(404).json({ message: "this is an unauthorized credentials ." });
        }

        // Success response
        res.status(200).json({
            message: true,
            
        });
    } catch (error) {
        // Handle server errors
        res.status(500).json({ message: error.message });
    }
};
