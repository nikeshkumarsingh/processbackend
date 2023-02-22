const mongoose=require("mongoose");
module.exports=()=>{
    return mongoose.connect(
        "mongodb+srv://nikesh:1234@cluster0.uzlriss.mongodb.net/test"
    )
}