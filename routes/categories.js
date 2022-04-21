const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const categories = require("../models/Category");
const Category = require("../models/Category");

//post
router.post("/",async(req,res)=>{
    const newcat = Category(req.body)
    try {
        const savedCat = await newcat.save()
        res.status(200).json(savedCat);
    } catch (error) {
        res.status(500).json(error);
    }
} )

//get
router.get("/",async(req,res)=>{
    try {
        const cats = await Category.find()
        res.status(200).json(cats);
    } catch (error) {
        res.status(500).json(error);
    }
})





module.exports = router