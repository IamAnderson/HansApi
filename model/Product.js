const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
    title: {
        type: String,
        required: true,    
    },
    
    text: {
        type: String,   
    },

    text1: {
        type: String,
    },

    img: {
        type: String,
        required: true,    
    },

    category: {
        type: String,
        required: true,    
    },

    parameter: {
        type: String,
    },

    parameter1: {
        type: String,
    },

    advantage: {
        type: String,
    }

}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema)