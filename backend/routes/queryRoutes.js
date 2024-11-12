const express=require('express');
const { sendQuery } = require('../controller/queryController');


const router =express.Router();

router.post('/' ,sendQuery);




module.exports=router;

