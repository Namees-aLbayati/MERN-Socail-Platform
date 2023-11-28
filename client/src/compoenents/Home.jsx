import React from 'react'
import AuthFun from '../utils/Auth'
import LoginForm from './loginForm'
import background from '../assets/images/background.jpg'
import Dashboard from './dashboard'
function Home() {
    console.log(AuthFun.IsloggedIn)
    const backgroundSet={
     

        backgroundImage:AuthFun.IsloggedIn()?"":`url(${background})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'100vh'
    }
  return (
    <div className='d-flex  align-items-center justify-content-center ' style={backgroundSet}>
{AuthFun.IsloggedIn()?(<Dashboard/>):(<LoginForm/>)
}   
 </div>
  )
}

export default Home
