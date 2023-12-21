const {User,Post,Comment}=require('../models');
const db=require('../config/connection')
const mongoose=require('mongoose')
const data={userName:'ali',email:'a@a.com',password:'123'}
const {signinToken}=require('../utils/Auth')
module.exports={
    getAllTest:async(req,res)=>{
const getUsers=await User.find({}).populate('posts').populate({
 path:'posts',
 populate:{
    path:'comments',
    model:'Comment'
 }   
})
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
    const getPost = await User.findById(Id)
    .populate({
      path: 'posts',
      populate: [
        {
          path: 'comments',
          model: 'Comment',
          populate: {
            path: 'user',
            model: 'User',
          },
        },
        {
          path: 'likes',
          model: 'User',
        },
      ],
    });
  

res.json({getPost})},

 createPost:async(req,res)=>{
  //  const userId=user.data._id;
   // const userNameEl=user.data.userName;
   // const postContent=body.postContent;
console.log(req.params,req.user,req.body)
try{
    const getPostID=await Post.create({content:req.body.postContent});
    console.log(getPostID,'post created')

if(!getPostID){
    console.log('something went wrong while create post')
}else{
 const pos=await User.findOneAndUpdate(
    {userName:req.user.data.userName},
    {$addToSet:{posts:getPostID._id}},
   )
if(!pos){

return res.this.state(400).json(err)
}
return res.json(pos)

};



}catch(err){
    return err
}


},
addComment:async(req,res)=>{
    try{
        const commentData=await Comment.create({postId:req.params.postId,comment:req.body.comment,user:req.body.commenterId});
        console.log(commentData,'data comm')
if(commentData){
    const getPost=await Post.findByIdAndUpdate(req.params.postId,
{$addToSet:{comments:commentData._id}})
console.log('post and comment added',getPost)
res.status(200).json(getPost)
}
    }catch(err){
        res.status(400).json(err)
    }

},
searchForUser:async(req,res)=>{
    console.log('query arrived server',req.query)
try{
    const searchQuery=req.query.q;
    if(!searchQuery){
        res.json({messege:'search not found'})
    }
    const regex=new RegExp(searchQuery,'i');
    const users=await User.find({
        $or:[
            {userName:regex},
            {email:regex}
        ]
    });
    res.status(200).json(users)

}catch(err){
    res.status(400).json({message:'internal server error'})
}
},

addLikes:async(req,res)=>{
    console.log('likes backend',req.body,req.params.postId)
    const updatePost=await Post.findByIdAndUpdate(req.params.postId,{
$addToSet:{likes:req.body.userId}
    });
    console.log(updatePost,'likes added')
if(updatePost){
res.json({message:'added'})}
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
