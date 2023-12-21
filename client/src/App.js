import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './compoenents/main';
import Dashboard from './compoenents/dashboard';
import { Virtuoso } from 'react-virtuoso';
import FriendComp from './compoenents/UserComp/rest/friend/FriendComp';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'; // Import CssBaseline for resetting some default styles
import { useDispatch, useSelector } from 'react-redux';
import { amber,grey,lightBlue } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightModeColors = {
  primary: {
    main: '#1976d2',
  },
  background: {
    default:lightBlue[20] ,
    paper: '#ffffff',
  },
  text: {
    primary: grey[900],
    secondary: grey[800],
  },

};

const darkModeColors = {
  primary: {
    main: '#1976d2',
  },
  background: {
    default: '#1a1a1a',
    primary:'#1a1a1a',
    secondary:grey[700]

  },
  text: {
    primary: '#ffffff',
    secondary: '#ffffff',
  },
  divider: amber[200],
 
};


function App() {
  const checkDarkMode = useSelector((state) => state.post.darkmode);

  const currentTheme = createTheme({
    palette: checkDarkMode ? darkModeColors : lightModeColors,
    // Other styling options can be added here
  });

  return (
    <ThemeProvider theme={currentTheme}>
      {/* Reset some default styles with CssBaseline */}
      <CssBaseline />

      <Router>
        <Virtuoso />

        <Routes>
          <Route path='/' element={<Home className={checkDarkMode ? 'dark-mode' : 'light-mode'} />} />
          <Route path='/dashboard' element={<Dashboard className={checkDarkMode ? 'dark-mode' : 'light-mode'} />} />
          <Route path='/friend' element={<FriendComp className={checkDarkMode ? 'dark-mode' : 'light-mode'} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
