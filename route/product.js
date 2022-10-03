const express = require("express")
const router = express.Router();
const Product = require("../model/Product")


//create product
router.post("/", async (req, res) => {
    
    try {
        const product = await Product.create(req.body);
        await product.save();
        res.status(200).json(product); 
    } catch (error) {
        res.status(409).json({message: error.message});
    }
})


//get products
router.get("/", async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(401).json(error);
    }
});


//update products
router.put("/product/:id", async(req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json(updateProduct);
    } catch (error) {
        res.status(409).json(error);
    }
});

//update products
router.delete("/product/:id", async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(201).json(`${product.id} has been deleted`);
    } catch (error) {
        res.status(409).json(error);
    }
});


module.exports = router;