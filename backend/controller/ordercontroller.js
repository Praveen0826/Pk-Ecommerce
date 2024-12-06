const ordermodel = require("../model/ordermodel");
const productmodel=require("../model/ordermodel")


exports.createsingleorder= async(req,res,next)=>{

    const cartitem=req.body;
    const amount= Number(cartitem.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(2);
    const status="pending";
    console.log(amount);

    const order= await ordermodel.create({cartitem,amount,status})
    console.log(order);
    

    // console.log(req.body);

    cartitem.forEach(async(item)=>{
        const product=await productmodel.findById(item.product._id);
        product.stock=product.stock-item.qty;
        await product.save();
    })
    

    res.json({
        success:true,
        order
    })
}