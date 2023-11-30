const mongoose = require('mongoose');
const bcrypt=require("bcryptjs")

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
profile:{
bio:String,
dob:Date,
addresss:String
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
    const salt = 10;
    if ( this.isModified('password')) {

    this.password = await bcrypt.hashSync(this.password, salt);
    }
 //this.password=  await bcrypt.hash(this.password,saltRounds);
  next()
})


userSchema.methods.checkPassword= async function(password){
  try {


return  await bcrypt.compare(password,this.password); 

  } catch (error) {
    console.error('Error during password comparison:', error);
    return false; // Return false in case of an error
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User ;