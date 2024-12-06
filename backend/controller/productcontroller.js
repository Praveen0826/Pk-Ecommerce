const Productmodel =require("../model/productmodel");
const mongoose =require("mongoose")
exports.getproduct= async(req,res,next)=>{

     const query=req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}

      const products =await Productmodel.find(query);
res.json({
        success:true,
        products
    })

}
exports.getsingleproduct= async(req,res,next)=>{

    const productId = req.params.id;

    

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid Product ID format",
        });
      }
      const product= await Productmodel.findById(req.params.id)
      console.log(req.params.id);
      
     
try {
    res.json({
        success:true,
        product
       
    })
    
} catch (error) {
    res.json({
        success:false,
        message:error.message
    })
    
}
   
}