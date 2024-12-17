import express from 'express';
import { createDayHandler, createDaysHandler, getAllDaysHandler, getRangeDaysHandler, updatePriceDayHandler } from '../controllers/dayController.js';

const router = express.Router();

router.get("/filter?",async (req, res) => {
    await getRangeDaysHandler(req, res);
});

router.get("/",getAllDaysHandler);
router.get("/create", createDaysHandler);
router.get("/create", createDayHandler);

router.put("/:day", updatePriceDayHandler);

export default router;