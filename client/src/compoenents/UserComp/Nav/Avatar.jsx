import React from 'react';
import { Avatar,Box,MoreIcon,IconButton } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

function AvatarImage({ userFullname }) {
  const  getRandomIndex=Math.floor(Math.random()*8)+1
  
  const firstName=userFullname.userName.split(" ")[0]

    const imagePath = `static/images/${firstName}.jpg`;
    return (
          <div className='d-flex flex-row m-2'  >
       

            <Avatar sx={{ bgcolor: deepOrange[500] }} alt={firstName} src={imagePath}/>

                      </div>


        );
}

export default AvatarImage;
