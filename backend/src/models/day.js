import db from "./db.js";

export const createDay = (day, price, callback) => {
    const q = 'INSERT INTO day(day, price) VALUES (?,?)';
    const params = [day, price];
    db.run(q, params, function(err){
        callback(err, {id:this.lastID});
    });
}

export const getAllDays = (callback) => {
    const q = 'SELECT * FROM day';
    db.all(q, [], function(err, rows) {
        if (err) {
            callback(err, null);
        } else if (!rows || rows.length === 0) {
            callback(null, false);
        }else {
            callback(null, rows);
        }
    });
}

export const updatePriceDay = (day, price, callback) => {
    const q = 'UPDATE day SET price = ? WHERE day = ?';
    const params = [price, day];
    db.run(q, params, function(err) {
        callback(err);
    });
}

export const getRangeDays = (hourStart, hourEnd, firstDate, lastDate, callback) => {
    const q = 'SELECT * FROM day WHERE day >=? AND day <=?';
    const params = [firstDate, lastDate];
    db.all(q, params, function(err, rows) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}