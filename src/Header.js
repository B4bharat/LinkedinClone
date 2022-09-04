import React from 'react';

import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
      <div className="header__right"></div>
    </div>
  )
}

export default Header;