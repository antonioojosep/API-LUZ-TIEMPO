import { dataPriceDays, getPricesByFilters } from "../helpers/getDataPrice.js";
import { createDay, getAllDays, updatePriceDay } from "../models/day.js";

export const getRangeDaysHandler = async (req, res) => {
    const { hourStart, hourEnd, firstDay, lastDay } = req.query;
    
    const data = await getPricesByFilters(hourStart, hourEnd,firstDay,lastDay);
    res.json(data);
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

export const createDayHandler = (req,res) => {
    const { day, price} = req.body; 
    
    createDay(day, price, (err, result) => {
        if(err){
            res.status(500).json({error:err.message});
        }else{
            res.status(201).json(result);
        }
    });
}

export const createDaysHandler = async (req, res) => {
    const days = await dataPriceDays();

    if(!Array.isArray(days)){
            return res.status(404).json({ error: "Debe ser un array de dias" });
        }
            
            let results = [];
        
            days.forEach(({ day, price }) => {
                createDay(day, price, (err, result) => {
                    if(err){
                        results.push({error:err.message});
                    }else{
                        results.push(result);
                    }
                });
            });
            res.status(200).json({ message: "Completado" });
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