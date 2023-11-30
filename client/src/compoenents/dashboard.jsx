import React, { useEffect } from 'react'
import NavBar from './UserComp/Nav/NavBar'
import {useDispatch,useSelector} from 'react-redux'
import { fetchPostSuccess, fetchUserPostFun, setCurrentUser } from '../actions/postsActions'
import AuthFun from '../utils/Auth'
import { Link,useNavigate } from 'react-router-dom'
function Dashboard() {
    const vertical= {
        borderLeft: "2px solid #000",/* Adjust thickness and color as needed */
        height: "85vh",/* Adjust height as needed */
        margin:" 20px" /* Adjust margin as needed */
      }
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const getUserLocalstorage=JSON.parse(localStorage.getItem('user'))
const navigateFun=()=>navigate('/');
useEffect(()=>{
    dispatch(setCurrentUser(getUserLocalstorage))
})
  return (

    <div>
        {AuthFun.IsloggedIn()?( 
            <section>
                <NavBar/>

        <div class="container text-center">

  <div class="row">
    <div class="col-2">
      1 of 3
    </div>
    <div class="col-8 " style={vertical}>
      2 of 3 (wider)
    </div>
    <div class="col" style={vertical}>
      3 of 3
    </div>
  </div>
  </div>
  </section>

):






(<h1 style={{cursor:"pointer",color:'blue'}} onClick={navigateFun}> You need to login first
</h1>)}


    </div>
  )
}

export default Dashboard
