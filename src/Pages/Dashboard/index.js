import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const index = () => {
  return (
    <>
      <div className="wrapper">
       
        <section className="panel-container">
          {/* sidebar */}
          <div className="sidebar">
                <div>Logo</div>
            <ul className="sidebar-nav">
              <li className="nav-item">
                <a className="nav-link">Dashboard</a>
              </li>
              <li className="nav-group">
                <a className="nav-link nav-group-toggle">User</a>
                <ul className="nav-group-items">
                  <li className="nav-item">
                    <a className="nav-link">All Users</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* main container */}
          <div className="main-container">
          <header>
          <div className="d-flex header-content justify-content-between align-items-center">
            <h3>Dashboard</h3>
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

            <div className="container">
              <div className="date-format ">
                <div className="d-flex align-items-center justify-content-between py-3">
                  <div>1 Dec 2022</div>{" "}
                  <div className="">
                    <select >
                      <option value="Days">Days</option>
                      <option value="Weeks">Weeks</option>
                      <option value="Months">Months</option>
                    </select>
                  </div>
                </div>
                <div className="date d-flex justify-content-between align-items-center">
                  <div className="card active">
                    01 <br /> Sat
                  </div>
                  <div className="card">
                    01 <br /> Sat
                  </div>
                  <div className="card">
                    01 <br /> Sat
                  </div>
                  <div className="card">
                    01 <br /> Sat
                  </div>
                  <div className="card">
                    01 <br /> Sat
                  </div>
                  <div className="card">
                    01 <br /> Sat
                  </div>
                  <div className="card">
                    01 <br /> Sat
                  </div>
                  <div className="card">
                    01 <br /> Sat
                  </div>
                  <div className="card">
                    01 <br /> Sat
                  </div>
                  <div className="card">
                    01 <br /> Sat
                  </div>
                </div>
              </div>

                <div className="mt-4">
              <div className="row">
                <div className="col-4 ">
                  <div className="count-card d-flex p-3">
                    <div className="user-group-icon"><GroupOutlinedIcon/></div>
                    <div>
                      <p>Total Active Users</p>
                      <h4>150</h4>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="count-card d-flex p-3">
                    <div className="user-group-icon"><SmsOutlinedIcon/></div>
                    <div>
                      <p>Total SMS Used</p>
                      <h4>50%</h4>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="count-card d-flex p-3">
                    <div className="user-group-icon"><MailOutlineOutlinedIcon/></div>
                    <div>
                      <p>Total Email Usage</p>
                      <h4>60%</h4>
                    </div>
                  </div>
                </div>
                </div>

              </div>

            <div className="mt-4">
              <div className="row">
                <div className="col-6">
                  <div className="border p-3 list-card">
                    <p>Project Wise Users</p>
                    <div>

                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border p-3 list-card">
                    <p>Login Toll</p>
                    <div>
                      <ul>
                        <li className="d-flex align-items-center justify-content-between">
                          <div className="list-profile">profile
                            <img src="" />
                          </div>
                          <div>
                            <p>John Deo</p>
                            <span>Manager</span>
                          </div>
                          <div className="label">5 min ago</div>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <div>
                            <img src="" />
                            <p>John Deo</p>
                            <span>Manager</span>
                          </div>
                          <div className="label">5 min ago</div>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <div>
                            <img src="" />
                            <p>John Deo</p>
                            <span>Manager</span>
                          </div>
                          <div className="label">5 min ago</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default index;
