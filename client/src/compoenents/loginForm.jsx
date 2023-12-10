import React, { useEffect, useState } from 'react';
import {TextField,Button,Stack,FormControlLabel} from'@mui/material';
import axios from 'axios';
import AuthFun from '../utils/Auth';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useSelector,useDispatch} from 'react-redux'
import { SET_THEME_MODE } from '../actions/postsActions';
const AuthForm = () => {
  const [checkedValue,setCheckedVal]=useState(false)
  const dispatch=useDispatch()
  const darkmode=useSelector((state)=>state.post.darkmode)

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  const checkDarkMode=useSelector((state)=>state.post.darkmode)
  function setThemeFun(e){
    e.preventDefault()
setCheckedVal(!checkedValue)
    dispatch(SET_THEME_MODE(!darkmode))

}
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
   AuthFun.getProfile()

    }else{
      window.alert('something went wrong')
    }
  })

}else{
axios.post('/users/login',dataToFetch).then((result)=>{
  if(result.status===200){
    AuthFun.login(result.data);
    AuthFun.getProfile()


  }
})


}
  


  }
  },[dataToFetch])
  const darkThemeNav = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  const toggleDarkMode=()=>{
    if(checkDarkMode!==false){
return 
    }else{
        return false

    }
}
const lightTheme = {
  backgroundColor: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  backgroundColor: '#606060	',
  color: '#ffffff',
};

  return (
    <div >

                    <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} checked={checkedValue} />}
        label={checkedValue?'Light Mode':'Dark mode'}
        style={{position:'relative',bottom:'130px'}}
        onChange={(e)=>setThemeFun(e)}
      />
    <form onSubmit={handelForm} style={{width:'500px', padding:'60px',backgroundColor:"rgba(65, 105, 225, 0.5)"}} class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end" >

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
    {showSignin?(<p className='p-4 mt-3'>Dont Have an account yet? <span style={{cursor:'pointer',color:'blue'}} onClick={toggleForm}>Signup</span></p>):(<p  className='p-4 mt-3'>You have an account??<span style={{cursor:'pointer',color:'blue'}}onClick={toggleForm} >Login</span></p>)}
</form>
</div>

  );
};

export default AuthForm;
