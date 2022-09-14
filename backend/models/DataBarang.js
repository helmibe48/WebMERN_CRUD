import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const DataBarang = db.define('databarang',{
    name: {type:DataTypes.STRING, primaryKey:true},
    stok: DataTypes.INTEGER,
    jenis: DataTypes.STRING
},{
    freezeTableName:true,
    timestamps: false
});

DataBarang.removeAttribute('id');
export default DataBarang;

(async()=>{
    await db.sync();
})();