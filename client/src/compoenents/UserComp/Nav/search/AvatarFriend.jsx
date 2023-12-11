import React from 'react'
import { Avatar,Box,MoreIcon,IconButton } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';


function AvatarFriend(props) {
    console.log(props.userData.userName[0],'friend avatar')
  return (
    <div >
            <Avatar sx={{ bgcolor: deepPurple[100] }} alt={props.userData.userName}>
         
         {props.userData.userName[0]}
            
                </Avatar>

    </div>
  )
}

export default AvatarFriend
