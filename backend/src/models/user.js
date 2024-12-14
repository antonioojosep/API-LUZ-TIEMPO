import db from './db.js';

export const createUser = (name, password, callback) => {
    const q = 'INSERT INTO user(name, password) VALUES (?, ?)';

    const params = [name, password];

    db.run(q, params, function(err){
        callback(err, {id:this.lastID});
    });
};

export const getAllUsers = (callback) => {
    const q = 'SELECT * FROM user';
    db.all(q, function(err, rows){
        callback(err, rows);
    });
};

export const login = (name, password, callback) => {
    const q = 'SELECT * FROM user WHERE name =? AND password =?';
    const params = [name, password];
    db.get(q, params, function(err, row){
        if (err) {
            callback(err, null);
        }else if (!row) {
            callback(null, false);
        }else {
            callback(null, true);
        }
    })
};

export const getUserById = (id, callback) => {
    const q = 'SELECT * FROM user WHERE id =?';
    const params = [id];
    db.get(q, params, function(err, row){
        if (err) {
            callback(err, null);
        } else if (!row) {
            callback(null, false);
        } else {
            callback(null, row);
        }
    });
};