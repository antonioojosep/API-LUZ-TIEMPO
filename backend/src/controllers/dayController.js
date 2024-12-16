import { dataPriceDays } from "../helpers/getDataPrice.js";
import { createDay, getAllDays, getRangeDays, updatePriceDay } from "../models/day.js";

export const getRangeDaysHandler = (req, res) => {
    const { start, end } = req.params;
    
    getRangeDays(start, end, (err, days) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(days);
        }
    });
}

export const getAllDaysHandler = (req, res) => {
    getAllDays(async (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(rows);
        }
    })
};

export const createDayHandler = async (req, res) => {
    const { day, price } = req.body;

    createDay(day, price, (err, day) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(day);
        }
    });
};

export const updatePriceDayHandler = async (req, res) => {
    const { day, price } = req.body;
    
    updatePriceDay(day, price, (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Precio actualizado correctamente' });
        }
    })
};