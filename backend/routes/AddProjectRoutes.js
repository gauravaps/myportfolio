const express =require('express');
const upload = require('../middileware/multer.middileware');
const { NewProjectAdd } = require('../controller/addProjectController');


const projectRouter =express.Router()

projectRouter.post('/addproject' ,upload.single('image') , NewProjectAdd);


module.exports =projectRouter;