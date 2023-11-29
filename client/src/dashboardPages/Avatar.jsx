import React from 'react';
import { Avatar } from '@mui/material';
function AvatarImage({ name }) {
  const  getRandomIndex=Math.floor(Math.random()*8)+1
    const imagePath = `static/images/${getRandomIndex}.jpg`;

        return (

            <Avatar alt={name} src={imagePath}   sx={{ width: 56, height: 56 }}
            />

        );
}

export default AvatarImage;
