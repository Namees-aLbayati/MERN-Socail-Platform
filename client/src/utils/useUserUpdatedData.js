import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { SET_USER_DATA } from "../actions/actionTypes";
export const useUserDataUpdater=()=>{

    const dispatch=useDispatch();
    const userDataSelector=useSelector((state)=>state.user.userData)
useEffect(()=>{

if(userDataSelector){

    dispatch({
        type:SET_USER_DATA,
        payload:userDataSelector
    })

}

},[dispatch,userDataSelector]);
return userDataSelector;

}