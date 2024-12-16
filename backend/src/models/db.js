import sqlite from 'sqlite3';
import { DATABASE_PATH } from '../config/config.js';


const db = new sqlite.Database(DATABASE_PATH, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    }else {
        console.log('Connected to the SQLite database.');
    }
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        password TEXT NOT NULL
    )`);
    db.run(`
        CREATE TABLE IF NOT EXISTS day (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day INTEGER NOT NULL,
        price INTEGER NOT NULL
        )`
    );
})

export default db;