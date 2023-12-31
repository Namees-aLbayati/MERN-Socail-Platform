const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema(
   {
    comment:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    postId:{
type:mongoose.Schema.Types.ObjectId,
ref:'Post'
    },
    createdAt:{
        type:Date,
        default:Date.now( )
    }
   } 
);
const Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment