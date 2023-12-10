import React, { useState } from 'react'
import AvatarImage from '../Nav/Avatar'
import {useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { PostCreationModal } from './posts/PostCreationModal';
import PostCards from './posts/PostCards';

function HeartOfPage() {
    const userFullname=useSelector((state)=>state.post.user);
    const[showModal,setShowModal]=useState(false)
   
  return (
<div class=" p-2  d-flex flex-column ">
<section class='d-flex flex-row m-5'>

<TextField
          id="filled-multiline-flexible"
          label={`What is in your mind ${userFullname.userName}?`}
          multiline
          maxRows={4}
          variant="filled"
          fullWidth='60'
          onClick={()=>setShowModal(true)}
        />
  <AvatarImage userFullname={userFullname}/>
        <PostCreationModal show={showModal} onHide={()=>setShowModal(false)} userFullname={userFullname}/>
  </section>
<PostCards/>
    </div>
  )
}

export default HeartOfPage
