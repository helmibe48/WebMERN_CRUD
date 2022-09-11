import express from "express";
import {
    getDataPenjualan,
    getDataPenjualanById,
    createDataPenjualan,
    updateDataPenjualan,
    deleteDataPenjualan 
} from "../controllers/PenjualanController.js";

const router = express.Router();

router.get('/datapenjualan', getDataPenjualan);
router.get('/datapenjualan/:id', getDataPenjualanById);
router.post('/datapenjualan', createDataPenjualan);
router.patch('/datapenjualan/:id', updateDataPenjualan);
router.delete('/datapenjualan/:id', deleteDataPenjualan);

export default router;