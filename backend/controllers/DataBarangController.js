// import Penjualan from "../models/Penjualan.js";
import DataBarang from "../models/DataBarang.js";

export const getDataBarang = async(req, res) =>{
    try {
        const response = await DataBarang.findAll({
    });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createDataBarang = async(req, res) =>{
    try {
        await DataBarang.create(req.body);
        res.status(201).json({msg: "Data Barang Added"});
    } catch (error) {
        console.log(error.message);
    }
}