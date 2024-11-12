const mongoose=require('mongoose')


const collectionschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    
    email:{
        type:String,
        require:true, 
        
        
    },
    
    phone:{
        type:String,
        require:true,
        
    },
    msg:{
        type:String,
        require:true,
    },
},
{timestamps:true})
 const QueryModel=new mongoose.model("yourquery",collectionschema)

 module.exports=QueryModel;