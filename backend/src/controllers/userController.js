import { getAllUsers,createUser, login, getUserById } from "../models/user.js";

export const getAllUsersHandler = (req, res) => {
    getAllUsers((err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(rows);
        }
    });
}

export const createUserHandler = (req, res) => {
    const { name, password } = req.body;
    console.log(name,password);
    createUser(name, password, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(result);
        }
    })
};

export const loginHandler = (req, res) => {
    const { name, password } = req.body;
    
    login(name, password, (err, user) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!user) {
            res.status(401).json({ error: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    });
};

export const getUserByIdHandler = (req, res) => {
    const { id } = req.params;
    
    getUserById(id, (err, user) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    });
};