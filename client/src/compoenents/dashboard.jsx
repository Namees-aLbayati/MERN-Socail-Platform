import React, { useEffect } from 'react';
import NavBar from './UserComp/Nav/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../actions/postsActions';
import AuthFun from '../utils/Auth';
import { Link, useNavigate } from 'react-router-dom';
import LeftBar from './UserComp/leftBar/leftBar';
import HeartOfPage from './UserComp/rest/heartOfPage';
import FriendComp from './UserComp/rest/friend/FriendComp';

function Dashboard() {
  const userNow=useSelector((state)=>state.post.currentUser)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserLocalStorage = JSON.parse(localStorage.getItem('user'));
  const checkDarkMode = useSelector((state) => state.post.darkmode);

  useEffect(() => {
    const userNow = JSON.parse(localStorage.getItem('user'));
    dispatch(setCurrentUser(userNow));
  }, [dispatch]);


  return (
      <div>
        <NavBar />

        {AuthFun.IsloggedIn() && getUserLocalStorage && getUserLocalStorage.userName === userNow?.userName ? (
          <section>
            <div className="row">
              <div className="col-3">
                <LeftBar />
              </div>
              <div className="col-6">
                <HeartOfPage />
              </div>
            </div>
          </section>
        ) : AuthFun.IsloggedIn() && getUserLocalStorage && getUserLocalStorage.userName !== userNow?.userName ? (
          <FriendComp />
        ) : (
          <h1 style={{ cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/')}>
            You need to login first
          </h1>
        )}
      </div>
  );
}

export default Dashboard;
