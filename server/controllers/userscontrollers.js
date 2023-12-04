const {User,Post}=require('../models');
const db=require('../config/connection')
const data={userName:'ali',email:'a@a.com',password:'123'}
const {signinToken}=require('../utils/Auth')
module.exports={
    getAllTest:async(req,res)=>{
const getUsers=await User.find({})
const getfriends=await User.find({})
res.json({getUsers}) 

    },

 usersSignUp :async (req,res)=>{
    console.log('signup rec',req.body)
try{
    const createNew=await User.create(req.body)
    const userToken=signinToken(createNew)
    console.log(userToken,createNew)
return res.json({userToken})

}catch(err){
    res.json(err)
}
 
},

userLogin: async (req, res) => {
    const findUser = await User.findOne({ email: req.body.email });
  
    if (!findUser) {
      res.json({ message: 'Email not found' });
    } else {
      const validatePass = await findUser.checkPassword(req.body.password);
  
      // Now you can use validatePass for further logic
      if (validatePass) {
        // Password is correct
         const userToken = signinToken(findUser);
        res.json({ userToken });
      } else {
      res.json({messege:'route pasword NOTcorrect'})

        // Password is incorrect
     //   res.json({ message: 'Incorrect password' });
      }
    }
  },
  
 usersPostGET:async(req,res)=>{
    const Id=req.params.userId
const getPost=await User.findById(Id).populate('posts')
res.json({getPost})},

 createPost:async(req,res)=>{
    console.log('inside create post route')
try{
    const getPostID=await Post.create({content:req.content});
if(!getPostID){
    console.log('something went wrong while create post')
}else{
    const addpostIdTouser=await User.findOneAndUpdate({$or:[{userName:req.userName},{_id:req.id}]},
        {$addToSet:{posts:getPostID._id}},
        {new:true,runValidators:true}
        );
return addpostIdTouser
}

}catch(err){
    return err
}


}
}
/*
db.on('open',async()=>{
 // let signup=  await usersSignUp(data)
let login=await userLogin(data)
let postGET=await usersPostGET({userName:'layth najm'})
let creatPost=await createPost({id:'6564cba444afbeb3d487b16a',content:'post from layth 3'})
console.log(creatPost,'retrun here')
})*/
