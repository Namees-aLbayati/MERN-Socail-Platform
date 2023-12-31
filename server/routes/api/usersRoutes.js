const router=require('express').Router();
const {getAllTest,usersSignUp,userLogin,usersPostGET,createPost,addComment,searchForUser, addLikes}=require('../../controllers/userscontrollers');
const {tokenMiddleware,signinToken}=require('../../utils/Auth')
router.route('/').get(getAllTest)
router.route('/signup').post(usersSignUp)
router.route('/login').post(userLogin)
router.route('/post/:userId').get(usersPostGET).put(tokenMiddleware,createPost);
router.route('/comment/:postId').put(addComment).post(addLikes)
router.route('/search').get(searchForUser)
module.exports=router