import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/system';  // Import styled and alpha from @mui/system
import InputBase from '@mui/material/InputBase';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AvatarFriend from './AvatarFriend';
import { RestfulRequestFun } from '../../../../utils/Axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchForUser() {
  const [searchedUser, setSearchedUser] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const waitFetch = async () => {
      if (searchedUser !== "") {
        const data = await RestfulRequestFun.SearchingForUser(searchedUser);
        if (data.data) {
          setResult(data);
        }
      }
    };
    waitFetch();
  }, [searchedUser]);

  function HandlenterSearchedName(e) {
    setSearchedUser(e.target.value);
  }

  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for a friend...."
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => HandlenterSearchedName(e)}
        />
      </Search>

      {searchedUser !== "" && result && result.data && result.data.length > 0 && (
        <nav aria-label="secondary mailbox folders">
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'text.secondary' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {result.data.map((friend) => (
              <ListItem disablePadding key={friend._id}>
                <ListItemButton>
                  <AvatarFriend userData={friend} />
                  <ListItemText primary={friend.userName} style={{ marginLeft: '10px' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      )}
    </div>
  );
}

export default SearchForUser;
