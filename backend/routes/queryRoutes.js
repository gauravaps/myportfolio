const express=require('express');
const { sendQuery, findAdmin } = require('../controller/queryController');


const router =express.Router();

router.post('/' ,sendQuery);

//find admin user
router.post('/admin' ,findAdmin)




module.exports=router;

