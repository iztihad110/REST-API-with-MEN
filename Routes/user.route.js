let body_parser = require("body-parser");
let Users = require("../Models/user.model");
let express = require("express");
let route = express.Router();

route.use(body_parser.urlencoded({extended: true}));
route.use(body_parser.json());

route.get('/', async (req, res)=>{
    try{
        let users = await Users.find();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

route.post('/', async (req, res)=>{
    let {name, age, email} = req.body;  
    try{
        let newUser = new Users({name, age, email});
        let savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})
route.get('/:id', async (req, res)=>{
    let Id = req.params.id;
    try{
        let user = await Users.findById(Id);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

route.put('/:id', async (req, res)=>{
    let Id = req.params.id;
    try{
        let user = await Users.findByIdAndUpdate(Id, req.body, {new: true});
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

route.delete('/:id', async(req, res)=>{
    try{
        let deletedUser = await Users.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUser);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})



module.exports = route;
