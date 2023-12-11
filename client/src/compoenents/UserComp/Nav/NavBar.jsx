import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AvatarImage from './Avatar';
import {useSelector} from 'react-redux'
import Icons from './Icons';
import SearchForUser from './search/SearchForUser';




export default function NavBar() {
  const userFullname=useSelector((state)=>state.post.user);

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div class='d-flex flex-wor'>
              <AvatarImage userFullname={userFullname}/>
<p style={{fontSize:'14px',marginTop:'20px'}}>Signed in As:{userFullname.userName}</p>
            </div>
          </Typography>

          <Icons/>
          <SearchForUser/>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}