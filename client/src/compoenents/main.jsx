import React from 'react'
import { useState } from 'react'
import AuthFun from '../utils/Auth'
import LoginForm from './loginForm'
import background from '../assets/images/background.jpg'
import Dashboard from './dashboard'
import ThemeProvider from "./theme/ThemeProvider";

function Home() {

  const backgroundSet={
     

        backgroundImage:AuthFun.IsloggedIn()?"":`url(${background})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'100vh'
    }
  return (

    <div className='d-flex  align-items-center justify-content-center' >
{AuthFun.IsloggedIn()?(<Dashboard/>):(<LoginForm/>)
}   
 </div>
  )
}

export default Home
