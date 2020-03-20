const {Product} = require("../models/product.model")

module.exports.getAllProducts = (req,res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err))
}

module.exports.getOneProduct = (req, res) => {
    const {id} = req.params
    Product.findOne({_id:id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(error))
}

module.exports.updateProduct = (req, res) => {
    const {id} = req.params;
    Product.findByIdAndUpdate({_id:id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    const {id} = req.params;
    Product.deleteOne({_id:id})
        .then(result => res.json(res))
        .catch(err => res.json(err))
}