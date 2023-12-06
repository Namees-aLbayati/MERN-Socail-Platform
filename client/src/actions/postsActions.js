import axios from 'axios'
export const setSearchedUser=(searchedData)=>({
    type:'SET_SEARCHED_USER',
    payload:searchedData  
    })

    export const setCurrentUser=(data)=>({
        type:'CURRENT_USER',
        payload:data
    })
    
export const setUpdateCurrentUser=(data)=>({
        type:'UPDATE_CURRENT_USER',
        payload:data
    });

export const setFetchPostRequest=()=>({
type:'FETCH_POSTS_REQUEST'
});
export const setFetchPostSuccess=(posts)=>({
    type:'FETCH_POSTS_SUCCESS',
    payload:posts
})
export const setFetchPostFail=(error)=>({
    type:'FETCH_POSTS_FAIL',
    payload:error
});

export const SET_THEME_MODE=(data)=>({
    
    type:'THEME_MODE',
    payload:data
})

export const fetchUserPostFun=async(userId,dispatch)=>{

try{

  dispatch(setFetchPostRequest())
const userPosts = await axios.get(`http://localhost:3001/users/post/${userId}`);
dispatch(setFetchPostSuccess(userPosts.data.getPost.posts))


}catch(err){
dispatch(setFetchPostFail(err))

}
}