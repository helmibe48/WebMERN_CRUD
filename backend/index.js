import express from "express";
import cors from "cors";
import PenjualanRoute from "./routes/PenjualanRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(PenjualanRoute);

app.listen(5000, ()=> console.log('Server Berjalan'));