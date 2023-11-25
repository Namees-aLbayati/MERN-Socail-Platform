const mongoose=require('mongoose');
const db=require('../config/connection')
const User=require('./User');
const Post=require('./Post');
const Comment=require('./Comment');


async function seedData(){
   await User.deleteMany({});
  await  Post.deleteMany({});
  await Comment.deleteMany({})

    const user1=new User({userName:'namees mohammed',email:'n@n.com',password:'1111'});
    const user2=new User({userName:'layth najm',email:'l@l.com',password:'1111'});
   await user1.save();
  await  user2.save();

let b=await User.find({})
console.log(b)
}
db.once('open',()=>{
    seedData()
})