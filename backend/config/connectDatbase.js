const mongoose =require("mongoose");

const connectdatabase=()=>{
    mongoose.connect("mongodb://localhost:27017/startup").then((con)=>{
        console.log("Mongodb connected on host "+con.connection.host);
        
    })

}

module.exports=connectdatabase;