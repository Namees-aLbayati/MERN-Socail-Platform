import React from 'react';
import { Avatar,Box,MoreIcon,IconButton } from '@mui/material';
function AvatarImage({ userFullname }) {
  const  getRandomIndex=Math.floor(Math.random()*8)+1
  const firstName=userFullname.userName.split(" ")[0]

    const imagePath = `static/images/${firstName}.jpg`;
    return (
          <div className='d-flex flex-row m-2'  >
       

            <Avatar alt={firstName} src={imagePath}   sx={{ width: 45, height: 45 }}
            />

                      </div>


        );
}

export default AvatarImage;
