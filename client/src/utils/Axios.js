import axios from 'axios';
export  const RestfulRequestFun={

createPostRequest:async (data)=>{
    const authToken=JSON.parse(localStorage.getItem('token'));

    const response=await axios.put(`http://localhost:3001/users/post/${data.id}`,{postContent:data.postContent},{
       headers:{
        Authorization: `Bearer ${authToken}`
       } 
    })
return response

}

}