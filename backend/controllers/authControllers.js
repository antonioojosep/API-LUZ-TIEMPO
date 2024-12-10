const UserModel = require("../models/userModel.js");

const AuthController = {
    register : (req, res) => {
        const { username, password } = req.body;

        UserModel.create(username, password, (err) => {
            if(err) return res.status(400).json({ error: err.message });
            res.status(201).json({ message: "User registered successfully" });
        });
    },

    login : (req, res) => {
        const { username, password } = req.body;

        UserModel.findByUsername()
    }
}