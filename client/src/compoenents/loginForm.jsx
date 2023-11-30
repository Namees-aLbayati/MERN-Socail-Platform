import React, { useEffect, useState } from 'react';
import {TextField,Button,Stack} from'@mui/material';
import axios from 'axios';
import AuthFun from '../utils/Auth';

const AuthForm = () => {
 
 const [showSignin,setShowSignin]=useState(true)
const [formData,setFormdata]=useState({userName:"",email:"",password:""})
const [dataToFetch,setDataToFetch]=useState(undefined)


function toggleForm(){
  setShowSignin(!showSignin)
}
function handelChange(e){
const {name,value}=e.target;

setFormdata((prev)=> ({...prev,[name]:value}))

}
function handelForm(e){
  e.preventDefault();
  console.log('form data',formData)
  setDataToFetch(formData)

}

useEffect(()=>{

  if(dataToFetch!==undefined){

    console.log('here',dataToFetch.userName=="")
if(dataToFetch.userName!==""){

  axios.post('/users/signup',dataToFetch).then((result)=>{
    if(result.status===200){
   AuthFun.login(result.data);

    }else{
      window.alert('something went wrong')
    }
  })

}else{
axios.post('/users/login',dataToFetch).then((result)=>{
  if(result.status===200){
    AuthFun.login(result.data);

  }
})


}
  


  }
  },[dataToFetch])


  return (
    <form onSubmit={handelForm} style={{width:'500px', padding:'60px',border:'2px solid blue', boxShadow:"3px 30x rbga(255,192,0,0.5)",backgroundColor:"rgba(255, 0, 0, 0.5)"}} >

{showSignin?(
  <div>
    <input type="email"  value={formData.email} class="form-control p-4 "  id="exampleFormControlInput1" placeholder="name@example.com" onChange={handelChange} name="email"/>
    <input type="password" id="inputPassword6" class="form-control p-4 mt-3" value={formData.password} aria-describedby="passwordHelpInline" onChange={handelChange} name='password'/>
    </div>


):(
  <div>
        <input type="text" value={formData.userName} class="form-control p-4 " id="username" placeholder="UserName" onChange={handelChange} name='userName'/>

    <input type="email" value={formData.email} class="form-control p-4 mt-3" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handelChange} name="email"/>
    <input type="password" value={formData.password} id="inputPassword6" class="form-control p-4 mt-3" aria-describedby="passwordHelpInline" placeholder='password' onChange={handelChange} name="password"/>
    </div>
)}
    <button type="submit" class="btn btn-primary p-3 mt-3">{showSignin?"Login":"Signup"}</button>
    {showSignin?(<p style={{color:'white'}}className='p-4 mt-3'>Dont Have an account yet? <span style={{cursor:'pointer',color:'yellow'}} onClick={toggleForm}>Signup</span></p>):(<p style={{color:'white'}} className='p-4 mt-3'>You have an account??<span style={{cursor:'pointer',color:'yellow'}}onClick={toggleForm} >Login</span></p>)}
</form>

  );
};

export default AuthForm;
