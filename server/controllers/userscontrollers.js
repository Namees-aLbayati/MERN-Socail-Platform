const {User,Post}=require('../models');
const db=require('../config/connection')
const data={userName:'ali',email:'a@a.com',password:'123'}
const {signinToken}=require('../utils/Auth')
module.exports={
    getAllTest:async(req,res)=>{
const getUsers=await User.find({}).populate('posts')
const getfriends=await User.find({}).populate('friends')

res.json({getfriends}) 

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

 userLogin: async(req,res)=>{
    let tocheckpass='123'
   
        const findUser=await User.findOne({userName:'ali'})
if(!findUser){
//res.json({message: 'not found'})

}else{
    const validatePass=await findUser.checkPassword(tocheckpass)
 if(!validatePass){
  //  res.json({message: 'password is not correct'})

 }
const userToken=signinToken(findUser)
return userToken
}},
 usersPostGET:async(req,res)=>{
const getPost=await User.findOne(req)
return getPost
},
 createPost:async(req,res)=>{
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
