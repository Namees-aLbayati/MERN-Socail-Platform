const mongoose = require('mongoose');
const bcrypt=require("bcryptjs")
const saltRounds = 10;

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
}],
posts:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Post'
}]

  }
)
userSchema.pre("save", async function (next){
  //console.log('passed middle pre save',this)
 this.password=  await bcrypt.hash(this.password,saltRounds);
  next()
})


userSchema.methods.checkPassword=async function(password){
return bcrypt.compare(password,this.password)
}

const User = mongoose.model('User', userSchema);

module.exports = User ;