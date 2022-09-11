import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Penjualan = db.define('penjualan',{
    name: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    terjual: DataTypes.INTEGER,
    tanggal: DataTypes.STRING,
    jenis: DataTypes.STRING
},{
    freezeTableName:true
});

export default Penjualan;

(async()=>{
    await db.sync();
})();