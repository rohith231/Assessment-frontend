import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express(); 
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use('/',Routes);
const PORT = 8000;

connection();

app.listen( PORT , () => console.log('server is running ')  )