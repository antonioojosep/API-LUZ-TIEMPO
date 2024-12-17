import express from 'express';
import { getWeather } from '../helpers/getDataPrice';

const router =  express.Router();

router.get("/", (req, res) => {
    const city = req.query.city;
    
    getWeather(city);
})

export default router;