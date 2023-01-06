import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';

const AppHeader = () => {
  return (
    <header>
          <div className="d-flex header-content justify-content-between align-items-center">
            <p className="re-heading">Dashboard</p>
            <div className="search-bar">
              <div className="position-relative">
              <input
                type="text"
                className="location-input"
                placeholder="location"
              />
              <LocationOnIcon className="location-icon"/>
              </div>
                <div className="search-bar-divider"></div>
              <div className="position-relative">
              <input
                type="text"
                className="search-input"
                placeholder="searchProject"
              />
              <SearchIcon className="search-icon"/>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center ">
              <button className="add-icon ms-2"><AddIcon/></button>
              <button className="notification-icon ms-2"><NotificationsIcon /></button>
              <div className="profile-circle ms-2">
                <img src=""/>
                Profile
              </div>
            </div>
          </div>
          </header>
  )
}

export default AppHeader
