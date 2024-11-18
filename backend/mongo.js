const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."], // Email validation
        },
        phone: {
            type: String,
            required: true,
            match: [/^\d{10}$/, "Phone number must be 10 digits."], // Phone number validation
        },
        msg: {
            type: String,
            required: true,
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const QueryModel = mongoose.model("yourquery", collectionSchema);

module.exports = QueryModel;
