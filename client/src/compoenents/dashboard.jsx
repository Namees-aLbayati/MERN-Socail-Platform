import React, { useEffect } from 'react'
import NavBar from './UserComp/Nav/NavBar'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {useDispatch,useSelector} from 'react-redux'
import { fetchPostSuccess, setCurrentUser } from '../actions/postsActions'
import AuthFun from '../utils/Auth'
import { Link,useNavigate } from 'react-router-dom'
import LeftBar from './UserComp/leftBar/leftBar';
import HeartOfPage from './UserComp/rest/heartOfPage';
function Dashboard() {

    const checkDarkMode=useSelector((state)=>state.post.darkmode)
    const lightTheme = {
        backgroundColor: '#ffffff',
        color: '#000000',
      };
      
      const darkTheme = {
        backgroundColor: '#606060	',
        color: '#ffffff',
      };
const darkThemeNav = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
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

const toggleDarkMode=()=>{
    if(checkDarkMode!==false){
return darkThemeNav
    }else{
        return false

    }
}
const dashDarkToggle=()=>{
    if(checkDarkMode!==false){
        return darkTheme
            }else{
                return 
        
            }
}
  return (

    <div style={checkDarkMode?darkTheme:lightTheme}  >
              <ThemeProvider theme={toggleDarkMode}>


        {AuthFun.IsloggedIn()?( 
            <section >
                <NavBar/>


  <div class="row">
    <div class='col-3'>
    <LeftBar/>

    </div>
    <div class='col-6'>
    <HeartOfPage/>

    </div>


  </div>
  
  </section>

):






(<h1 style={{cursor:"pointer",color:'blue'}} onClick={navigateFun}> You need to login first
</h1>)}

</ThemeProvider>
    </div>
  )
}

export default Dashboard
