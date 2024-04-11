const mongoose=require("mongoose");
 const{ MONGO_URI }=process.env;

exports.connect=()=>{
    console.log("db..",MONGO_URI)
    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
    }).then(()=>{
        console.log("database connection successfully")
    }).catch((error)=>{
        console.log("database connection faild. Exesting now...");
        console.log(error)
    });
};