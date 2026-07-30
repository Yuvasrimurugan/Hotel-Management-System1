const express=require("express");

const router=express.Router();

const {

allHotels

}=require("../controllers/hotelController");

router.get("/",allHotels);

module.exports=router;