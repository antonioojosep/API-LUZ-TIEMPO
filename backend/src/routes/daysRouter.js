import express from 'express';
import { getAllDaysHandler, getRangeDaysHandler, updatePriceDayHandler } from '../controllers/dayController.js';

const router = express.Router();

router.get("/start_date=:start/end_date=:end",getRangeDaysHandler);

router.get("/", getAllDaysHandler);

router.put("/:day", updatePriceDayHandler);

export default router;