const express=require("express");
const app=express();
// const dotenv=require('dotenv');
const path=require("path");

const PORT= 8000;
const connectdatabase=require("./config/connectDatbase")
// import dotenv from '../backend/config/config.env';
const product=require("./routes/product");
const order=require("./routes/order");
const cors = require("cors");
connectdatabase();

app.use(express.json());
app.use(cors())
app.use("/api/v1",product);
app.use("/api/v2",order);




// dotenv.config({path: path.join(__dirname,'config','config.env')})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
});