const db=require("../config/db");

const getHotels=()=>{

return db.query(

"SELECT * FROM hotels"

);

};

module.exports={

getHotels

};