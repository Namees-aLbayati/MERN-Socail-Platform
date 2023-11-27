const router=require('express').Router();
const {getAllTest,usersSignUp,userLogin,usersPostGET,createPost}=require('../../controllers/userscontrollers');
const {tokenMiddleware}=require('../../utils/Auth')
router.route('/').get(tokenMiddleware,getAllTest);
module.exports=router