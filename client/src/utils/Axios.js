import axios from 'axios';
export  const RestfulRequestFun={

createPostRequest:async (data)=>{
    const authToken=localStorage.getItem('token');
    console.log('token',authToken,data)
    const response=await axios.post(`http://localhost:3001/users/post/${data.id}`,{postContent:data.postContent},{
       headers:{
        Authorization: `Bearer ${authToken}`
       } 
    })
}

}