const express = require('express')
const router = express.Router()
const Test = require('../models/collection.js')

//get all
router.get('/', async (req,res)=>{
    try {
        const data = await Test.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message:error.message })
    }
})

//get one
router.get('/:id', getUser , (req,res)=>{
    res.json(res.data.name)
})

//create one
router.post('/', async (req,res)=>{
    const data = new Test({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })

    try {
        const newData = await data.save()
        res.status(201).json(newData)
        console.log("data saved")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//update one
router.patch('/:id', getUser ,async (req,res)=>{
    if(req.body.name !== null){
        res.data.name = req.body.name
    }
    if(req.body.email !== null){
        res.data.email = req.body.email
    }
    if(req.body.age !== null){
        res.data.age = req.body.age
    }
    try {
        const updateData = await res.data.save()
        res.json(updateData)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//delete one
router.delete('/:id', getUser , async (req,res)=>{
    try {
        await res.data.remove()
        console.log("user removed!!!")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


//middleware to get user
async function getUser(req,res,next) {
    let data
    try {
        data = await Test.findById(req.params.id)
        if( data == null){
            return res.status(404).json({message:"cannot find user"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    res.data = data
    next()
}
module.exports = router