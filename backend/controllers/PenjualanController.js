import Penjualan from "../models/Penjualan.js";

export const getDataPenjualan = async(req, res) =>{
    try {
        const response = await Penjualan.findAll({
            // include: [{
            //     model: Penjualan
            // }]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDataPenjualanById = async(req, res) =>{
    try {
        const response = await Penjualan.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createDataPenjualan = async(req, res) =>{
    try {
        await Penjualan.create(req.body);
        res.status(201).json({msg: "Data Penjualan Added"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDataPenjualan = async(req, res) =>{
    try {
        await Penjualan.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Penjualan Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDataPenjualan = async(req, res) =>{
    try {
        await Penjualan.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Penjualan Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
