import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';

import { selectUser } from './features/userSlice';

import SidebarTop from './assets/freeimg_66415292freejpg850.jpg';

import './Sidebar.css';

function Sidebar() {
  const { displayName, email, photoUrl  } = useSelector(selectUser);


  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    )
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={SidebarTop} alt="" />
        <Avatar src={photoUrl} className="sidebar__avatar" >{email[0]}</Avatar>
        <h2>{displayName}</h2>
        <h4>{email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('golang')}
        {recentItem('microservices')}
        {recentItem('nodejs')}
      </div>
    </div>
  )
}

export default Sidebar