import React from 'react'
import AuthFun from '../utils/Auth'
import LoginForm from './loginForm'
function Home() {
    console.log('here i am',AuthFun.login())
  return (
    <div>
{AuthFun.login()?(<h1>logged in</h1>):(<LoginForm/>)
}   
 </div>
  )
}

export default Home
