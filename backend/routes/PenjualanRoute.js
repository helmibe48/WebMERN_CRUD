import express from "express";
import {
    getDataPenjualan,
    getDataPenjualanById,
    createDataPenjualan,
    updateDataPenjualan,
    deleteDataPenjualan 
} from "../controllers/PenjualanController.js";
import {
    getDataBarang,
    createDataBarang
} from "../controllers/DataBarangController.js"

const router = express.Router();

router.get('/datapenjualan', getDataPenjualan);
router.get('/datapenjualan/:id', getDataPenjualanById);
router.post('/datapenjualan', createDataPenjualan);
router.patch('/datapenjualan/:id', updateDataPenjualan);
router.delete('/datapenjualan/:id', deleteDataPenjualan);
router.get('/databarang', getDataBarang);
router.post('/databarang', createDataBarang);

export default router;