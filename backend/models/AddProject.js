const mongoose =require('mongoose');

const projectSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },

    image: {
        type: String,
        required: true,
        default: "https://res.cloudinary.com/gauravkacloud/image/upload/v1731986753/photo_yrra2i.png", 
    },

    liveUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(http|https):\/\/[^ "]+$/.test(v); // Regex for URL validation
            },
            message: (props) => `${props.value} is not a valid URL!`,
        },
    },
    sourceCode: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(http|https):\/\/[^ "]+$/.test(v);
            },
            message: (props) => `${props.value} is not a valid URL!`,
        },
    },


},{timestamps:true});


const AddProject = mongoose.model('AddProject' , projectSchema)

module.exports = AddProject;