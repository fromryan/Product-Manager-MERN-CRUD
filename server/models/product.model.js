const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title must be provided"],
        minlength: [1, "Title must be at least 1 character"]
    },
    price:{
        type: Number,
        required: [true, "Title must be provided"]
    },
    description:{
        type: String,
        required: [true, "Description must be provided"]
    }
}, {timestamps:true})


const Product = mongoose.model("Product", ProductSchema)
module.exports.Product = Product
