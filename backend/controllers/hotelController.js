const {getHotels}=require("../models/hotelModel");

exports.allHotels=async(req,res)=>{

try{

const hotels=await getHotels();

res.json(hotels.rows);

}catch(err){

res.status(500).json({

message:err.message

});

}

};