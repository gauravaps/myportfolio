const QueryModel = require("../models/mongo");
const bcrypt =require('bcryptjs');



exports.sendQuery = async (req, res) => {
    try {
        const { name, email,password, phone, msg } = req.body;
        const newQuery = new QueryModel({ name, email,password, phone, msg });
        const savedQuery = await newQuery.save();
            
        res.status(201).json(savedQuery);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
  


exports.findAdmin = async (req, res) => {
    try {
        
        const { email,password  } = req.body;

        // Validate email input
        if (!email || !password) {
            return res.status(400).json({ message: "Email is required and password." });
        }

        // Query to find the admin user with the provided email
        const adminUser = await QueryModel.findOne({ email, admin: true });

        // Check if admin user exists
        if (!adminUser) {
            return res.status(404).json({ message: "this is an unauthorized credentials ." });
        }

        const isPasswordCorrect = await bcrypt.compare(password, adminUser.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid password." });
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
