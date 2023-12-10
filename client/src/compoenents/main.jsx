import React from 'react'
import { useState } from 'react'
import AuthFun from '../utils/Auth'
import LoginForm from './loginForm'
import background from '../assets/images/background.jpg'
import Dashboard from './dashboard'
import ThemeProvider from "./theme/ThemeProvider";
import {useSelector} from'react-redux'
function Home() {

  const backgroundSet={
     

        backgroundImage:AuthFun.IsloggedIn()?"":`url(${background})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
      //  height:'100vh'
    }
    const checkDarkMode=useSelector((state)=>state.post.darkmode)
    const lightTheme = {
      backgroundColor: '#ffffff',
      color: '#000000',
      height:'100vh'
    };
    
    const darkTheme = {
      backgroundColor: '#606060	',
      color: '#ffffff',
      height:'100vh'

    };

  return (

    <div className='d-flex  align-items-center justify-content-center ' style={checkDarkMode?darkTheme:lightTheme} >
{AuthFun.IsloggedIn()?(<Dashboard/>):(<LoginForm/>)
}   
 </div>
  )
}

export default Home
