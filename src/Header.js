import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";

import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Avatar from './assets/avatar-library/avatar-3.jpg';

import { logout } from './features/userSlice';

import HeaderOption from './HeaderOption';

import './Header.css';

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful');
    }).catch((error) => {
      // An error happened.
      console.log('An error occurred while signing out');
    });
  }

  return (
    <div className="header">
      <div className="header__left">
        <LinkedInIcon sx={{ fontSize: 40, color: '#0077B5', marginRight: '10px' }} />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon}  title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={Avatar} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header;