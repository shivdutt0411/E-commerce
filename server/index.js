import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import router from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);

const port = 8000;
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(userName,password);

app.listen(port,()=>console.log(`App listening on port ${port}`));
DefaultData();
