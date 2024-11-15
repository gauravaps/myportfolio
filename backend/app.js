const express=require('express');
const cors=require('cors') ;
const dbConnection = require('./connection/dbConnection');
const dotenv =require('dotenv');
const { route } = require('./routes/queryRoutes');



dotenv.config();
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

// query router
app.use('/',route);

  

const port = process.env.PORT || 5000;  

dbConnection()


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });