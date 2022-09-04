import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import HeaderOption from './HeaderOption';

import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <LinkedInIcon sx={{ fontSize: 40, color: '#0077B5', marginRight: '10px' }} />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon}  title="My Network" />
      </div>
    </div>
  )
}

export default Header;