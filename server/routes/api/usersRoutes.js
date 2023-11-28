const router=require('express').Router();
const {getAllTest,usersSignUp,userLogin,usersPostGET,createPost}=require('../../controllers/userscontrollers');
const {tokenMiddleware,signinToken}=require('../../utils/Auth')
router.route('/').get(getAllTest)
router.route('/signup').post(usersSignUp)
module.exports=router