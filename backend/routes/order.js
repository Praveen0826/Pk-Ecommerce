const express=require("express");
const { createsingleorder } = require("../controller/ordercontroller");
const router=express.Router();



router.route("/order").post(createsingleorder)

module.exports=router;