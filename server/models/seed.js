const mongoose=require('mongoose');
const db=require('../config/connection')
const User=require('./User');
const Post=require('./Post');
const Comment=require('./Comment');


async function seedData(){
   await User.deleteMany({});
  await  Post.deleteMany({});
  await Comment.deleteMany({})

const commentFU1=new Comment({comment:'i like your post layth'})
const commentFU2=new Comment({comment:'well said namees'})
commentFU1.save();
 commentFU2.save();

const postFU1=new Post({content:'hello friends this is namees'})
const postFU2=new Post({content:'hello friends this is layth'})
await postFU1.save()
await postFU2.save()

    const user1=new User({userName:'namees mohammed',email:'n@n.com',password:'1111'});
    const user2=new User({userName:'layth najm',email:'l@l.com',password:'1111'});
    const user3=new User({userName:'ayla najm',email:'a@a.com.com',password:'1111'});

   await user1.save();
  await  user2.save();

  user1.friends.push(user2._id)
  user2.friends.push(user1._id)
  
  await user1.save();
  await  user2.save();
  postFU1.likes.push(user2._id)
  postFU2.likes.push(user1._id)



postFU1.comments.push(commentFU2._id)
postFU2.comments.push(commentFU1._id)
 postFU1.save();
 postFU2.save();


commentFU1.user=user1._id
  commentFU2.user=user2._id
 commentFU1.save()
 commentFU2.save()
 user1.posts.push(postFU1._id);


 await user1.save();
await user2.save();

let users=await User.findOne({userName:'namees mohammed'}).populate('friends').populate('posts').populate({
    path:'posts',
    populate:{
        path:"comments",
        model:'Comment'
    }
})
const objectId = new mongoose.Types.ObjectId('656399f9ccc46e35d3a27867');

const user=await User.findOne({userName:'namees mohammed'}).populate('friends').populate('posts') .populate({
    path: 'posts',
    populate: {
      path: 'comments',
      model: 'Comment', // Assuming the name of your Comment model
    },
  }).exec()

  const user22 = await User.findOne({ userName: 'namees mohammed' })
  .populate('posts')
  .exec();


const returnCom=await Post.findOne({content:'hello friends this is namees'}).populate('comments').populate('likes')

let comments=await Comment.find({})
const post = await Post.find({});
for(const posts of user22.posts ){
const comm=await posts.populate('comments')
const like=await posts.populate('likes')



}
return

}
db.once('open',async()=>{
    try{
      await   seedData()
console.log('data seeded succesfully')
    }catch(err){
        console.log('error comes up')
    }finally{
        mongoose.connection.close().then(()=>{
            console.log('db connection closed')
        })
    }
})