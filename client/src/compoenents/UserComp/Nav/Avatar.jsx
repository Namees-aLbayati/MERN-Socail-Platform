import React from 'react';
import { Avatar,Box,MoreIcon,IconButton } from '@mui/material';
function AvatarImage({ userFullname }) {
console.log('c',userFullname)
  const  getRandomIndex=Math.floor(Math.random()*8)+1
    const imagePath = `static/images/${getRandomIndex}.jpg`;
const firstName=userFullname.userName.split(" ")[0]
    return (
          <div className='d-flex flex-row m-2'  >
       

            <Avatar alt={firstName} src={imagePath}   sx={{ width: 45, height: 45 }}
            />
            <p style={{fontSize:'12px',marginTop:'4px'}}> Signed In As:{userFullname.userName}</p>

                      </div>


        );
}

export default AvatarImage;
