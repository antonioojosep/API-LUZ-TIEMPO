const db = require("../db.js");

// User Model

const UserModel = {
    create : (username, password, callback) => {
        const query = "INSERT INTO users (username, password) VALUES (?,?)";
        db.run(query , [username, password], callback);
    },

    findByUsername : (username, callback) => {
        const query = "SELECT * FROM users WHERE username =?";
        db.get(query, [username], callback);
    }
};

module.exports = UserModel;