const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    author: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
        },

 content:{
    type:String
 }  ,
 likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
 }] ,
 comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Comment'
 }],
 postTime:{
    type:Date,
    default:Date.now()
 }
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
});
postSchema.virtual('likesNumber').get(function(){
    return this.likes.length
})

const Post=mongoose.model('Post',postSchema);
module.exports=Post