import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import DataBarang from "./DataBarang.js";

const {DataTypes} = Sequelize;

const Penjualan = db.define('penjualan',{
    name: DataTypes.STRING,
    terjual: DataTypes.INTEGER,
    tanggal: DataTypes.STRING
},{
    freezeTableName:true
});

// DataBarang.hasOne(Penjualan, {foreignKey: 'name'});
// DataBarang.belongsTo(Penjualan, {foreignKey: 'name'});

export default Penjualan;

(async()=>{
    await db.sync();
})();