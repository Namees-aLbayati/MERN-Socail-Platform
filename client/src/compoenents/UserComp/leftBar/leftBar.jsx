import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Avatar from '@mui/material/Avatar';
import GroupIcon from '@mui/icons-material/Group';
//will fetch friends list here
export default function LeftBar() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.secondary' }}>
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
<GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends List" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>


        
        
        </List>
      </nav>
     
    </Box>
  );
}
