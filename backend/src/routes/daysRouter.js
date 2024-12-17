import express from 'express';
import { createDayHandler, createDaysHandler, getAllDaysHandler, getRangeDaysHandler, updatePriceDayHandler } from '../controllers/dayController.js';

const router = express.Router();

router.get("/filter?",(req, res) => {
    const firstDay = req.params.firstDay;
    const lastDay = req.params.lastDay;
    const firsHour = req.params.firsHour;
    const lastHour = req.params.lastHour;

    getRangeDays(firstDay, lastDay, firsHour, lastHour, (err, days) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(days);
        }
    });
 
});

router.get("/",getAllDaysHandler);
router.get("/create", createDaysHandler);
router.get("/create", createDayHandler);

router.put("/:day", updatePriceDayHandler);

export default router;