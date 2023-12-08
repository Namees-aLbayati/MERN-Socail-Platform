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
export const addCommentFun = async (postId, comment, commenterId, dispatch) => {
    try {
      const response = await axios.put(`http://localhost:3001/users/comment/${postId}`, {
        comment: comment.comment,
        commenterId: commenterId.userId,
      });
  
      if (response.status === 200) {
        console.log('Comment added successfully:', response);
  
        // Assuming the response.data contains the newly added comment with an _id
        const newCommentId = response.data._id;
  
        // Execute the function to fetch posts after adding a comment
        fetchUserPostFun(commenterId.userId, dispatch);
  
        // Optionally, you can dispatch other actions if needed
        // dispatch(someOtherAction());
  
        // Return something if necessary
        return true;
      }
    } catch (error) {
      // Handle errors if needed
      console.error('Error adding comment:', error);
      return false;

      // Dispatch an action to indicate the failure
      // dispatch(someFailureAction());
    }
  };
  