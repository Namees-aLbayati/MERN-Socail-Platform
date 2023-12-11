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

},
SearchingForUser:async(query)=>{
    console.log(query,'query here')
const response=await axios.get(`http://localhost:3001/users/search?q=${query}`);

console.log('search back',response)
if(response.status!==200){
    return false
}
return response
}

}