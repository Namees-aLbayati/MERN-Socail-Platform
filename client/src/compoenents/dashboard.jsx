import React from 'react'
import NavBar from '../dashboardPages/NavBar'
import {useDispatch,useSelector} from "react-redux"
import { SET_USER_DATA } from '../actions/actionTypes';
function Dashboard() {
    const dispatch=useDispatch();
    const userDataSelector = useSelector((state) => state.user.userData);

    dispatch({
        type:SET_USER_DATA,
        payload:'hello there im payload'
    })
  return (
<NavBar/>
  )
}

export default Dashboard
