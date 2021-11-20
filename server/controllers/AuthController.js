const express = require("express");
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation.js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const app = express();

class AuthController {
  
    static register = async (req, res) => {
        //Validation before saving data
        const { error } = registerValidation(req.body);
        // if (error) { res.status(400).send(error) }
        console.log(error);
        //Checking if user already exists
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.send("User already exists");
        }
        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //Creating new user
        const { username, password, room } = req.body;
        const newUser = new User({
            username,
            password: hashedPassword,
            room,
        });
        try {
            //save new user to the database
            const savedUser = await newUser.save();
            res.send(savedUser);
        } catch (err) {
            //return error if any
            res.send(err);
        }
    }; 
    
    //login method
    static login = async (req, res) => {
        //  //Validation before savng data
        const { error } = loginValidation(req.body);
        console.log(error);
        //  //Checking if username already exists
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.send("User does not exist");
        }
        //  //Checking if password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            res.send("Invalid password");
        } else {
            res.send(user);
        }
        console.log(user._id);
        //  //Creating and assigning token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);    
        console.log("Here is your token " + token);
        
    };
}
module.exports = AuthController;