const mongoose = require('mongoose');
const bcrypt=require("bcrypt")
const userSchema = new mongoose.Schema(
  {
    userName:{
      type:String
    },
email:{
  type:String
},
password:{
  type:String
},
friends:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
}]

  }
)
userSchema.pre("save",(next)=>{
  next()
})

const User = mongoose.model('User', userSchema);

module.exports = User ;