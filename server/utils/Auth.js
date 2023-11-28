const jwt=require('jsonwebtoken');
const secret='mysecret';
module.exports={
    signinToken:function({_id,userName,password}){
        console.log('sigin token here')
const payload={_id,userName,password};
return jwt.sign({data:payload},secret)
    },
    tokenMiddleware:function(req,res,next){
        console.log('inside middleware')
        try{
const data=jwt.verify()
        }catch(err){
            throw err
        }
next()
    }
}