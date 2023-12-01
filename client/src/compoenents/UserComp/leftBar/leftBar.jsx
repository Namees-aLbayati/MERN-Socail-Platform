'use client';
import { Badge, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link } from 'react-router-dom'
export default function LeftBar() {
  return (

    <Sidebar>
     <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="#" />}> 

    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <HomeIcon /> 
         
          </Badge>
        </IconButton>

    </MenuItem>
    <MenuItem component={<Link to="#" />}> Calendar</MenuItem>
    <MenuItem component={<Link to="#" />}> E-commerce</MenuItem>
  </Menu>
    </Sidebar>
  );
}
