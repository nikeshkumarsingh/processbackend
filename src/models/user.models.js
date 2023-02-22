const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    userName:{type:String,required: true, unique: true},
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true },
    address:{type:String,required:true},
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



const User = mongoose.model("user", userSchema);
module.exports = User;