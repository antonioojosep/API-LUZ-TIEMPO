import express from 'express';
import { getWeather } from '../helpers/getDataPrice.js';

const router =  express.Router();

router.get("/", async (req, res) => {
    const city = req.query.city;
    try {
        const data = await getWeather(city);
        res.json(data);
    }catch (error) {
        console.error("Error al realizar la petición", error);
    }
})

export default router;