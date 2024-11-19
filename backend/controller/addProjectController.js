const AddProject = require("../models/AddProject");
const uploadonCloudinary = require("../utils/cloudinary");




exports.NewProjectAdd = async(req ,res) =>{

    try {
        
        const { name, description, liveUrl, sourceCode } = req.body;

        
        // Validate input fields
        if (!name || !description || !liveUrl || !sourceCode) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        let imageUrl = null;

        //upload image to cloudinary
        if(req.file && req.file.path){
            const uploadResponse  = await uploadonCloudinary(req.file.path);
        

        if(uploadResponse){
            imageUrl = uploadResponse.secure_url;

        }   else {
            return res.status(500).json({ message: "Image upload failed." });
        }
    
    } 

    //save project to data base 

    const newProject  = new AddProject({
        name,
        description,
        image:imageUrl || undefined ,
        liveUrl,
        sourceCode,
    });

    await newProject.save();

    return res.status(201).json({
        message: "Project added successfully!",
        project: newProject,
    });


    } catch (error) {

        console.error("Error in NewProjectAdd:", error);
        return res.status(500).json({ message: "Internal server error.", error: error.message });
    
        
    }
}



