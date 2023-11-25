const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
 content:{
    type:String
 }  ,
 likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
 }] ,
 comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
 }],
 postTime:{
    type:Date,
    default:Date.now()
 }
});
const Post=mongoose.model('Post',postSchema);
module.exports=Post