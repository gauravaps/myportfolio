const express =require('express');
const upload = require('../middileware/multer.middileware');
const { NewProjectAdd, GetAllProjects } = require('../controller/addProjectController');
const { authCheck } = require('../middileware/authCheck ');


const projectRouter =express.Router()

//add new project by authcheck...
projectRouter.post('/addproject',authCheck ,upload.single('image') , NewProjectAdd);

//get all project list
projectRouter.get('/getprojects' ,GetAllProjects);


module.exports =projectRouter;