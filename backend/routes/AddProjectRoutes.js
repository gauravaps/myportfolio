const express =require('express');
const upload = require('../middileware/multer.middileware');
const { NewProjectAdd } = require('../controller/addProjectController');
const { authCheck } = require('../middileware/authCheck ');


const projectRouter =express.Router()

projectRouter.post('/addproject',authCheck ,upload.single('image') , NewProjectAdd);


module.exports =projectRouter;