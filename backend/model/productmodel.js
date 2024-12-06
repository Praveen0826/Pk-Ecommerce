const mongoose=require("mongoose");

const productschema= new mongoose.Schema(
    {
        name:String,
        price:String,
        Description:String,
        Rating:String,
        image:[
            {
                image:String
            }
        ],
        Catagory:String,
        seller:String,
        Stock:String,
        numofreview:String
    }


);
 const Productmodel=mongoose.model("product",productschema);
 module.exports=Productmodel;