import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Chart from "react-apexcharts";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="date-format ">
          <div className="d-flex align-items-center justify-content-between py-3">
            <div className="re-card-title">1 Dec 2022</div>
            <div>
              <select className="date-dropdown">
                <option value="Days">Days</option>
                <option value="Weeks">Weeks</option>
                <option value="Months">Months</option>
              </select>
            </div>
          </div>
          <div className="date d-flex justify-content-between align-items-center">
            <div className="re-date-card active">
              <p>01</p> <span>Sat</span>
            </div>
            <div className="re-date-card">
              <p>01</p> <span>Sat</span>
            </div>
            <div className="re-date-card">
              <p>01</p> <span>Sat</span>
            </div>
            <div className="re-date-card">
              <p>01</p> <span>Sat</span>
            </div>
            <div className="re-date-card">
              <p>01</p> <span>Sat</span>
            </div>
            <div className="re-date-card">
              <p>01</p> <span>Sat</span>
            </div>
            <div className="re-date-card">
              <p>01</p> <span>Sat</span>
            </div>
            <div className="re-date-card">
              <p>01</p> <span>Sat</span>
            </div>
            <div className="re-date-card">
              <p>01</p> <span>Sat</span>
            </div>
            <div className="re-date-card">
              <p>01</p> <span>Sat</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="row">
            <div className="col-4 ">
              <div className="count-card d-flex p-3 user-card">
                <div className="user-group-icon">
                  <GroupOutlinedIcon />
                </div>
                <div>
                  <p>Total Active Users</p>
                  <h4>150</h4>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="count-card d-flex p-3 sms-card">
                <div className="user-group-icon">
                  <SmsOutlinedIcon />
                </div>
                <div>
                  <p>Total SMS Used</p>
                  <h4>50%</h4>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="count-card d-flex p-3 email-card">
                <div className="user-group-icon">
                  <MailOutlineOutlinedIcon />
                </div>
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
              <div className="border p-4 list-card">
                <div className="py-3">
                  <p className="re-card-title">Project Wise Users</p>
                </div>
                <div>
                  <Chart
                    options={{
                      responsive: [
                        {
                          breakpoint: 480,
                          options: {
                            chart: {
                              type: "donut",
                              height: 100,
                              width: "100%",
                              offsetX: 50,
                            },
                            legend: {
                              position: "left",
                            },
                          },
                        },
                      ],
                      fill: {
                        type: "solid",
                        colors: ["#8BD742", "#BCC1C8", "#78AEFF", "#F74D52"],
                      },
                      stroke: {
                        width: 0,
                      },
                      dataLabels: {
                        enabled: false,
                      },
                      markers: {
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 25,
                      },
                      colors: ["#8BD742", "#BCC1C8", "#78AEFF", "#F74D52"],
                    }}
                    series={[44, 55, 41, 17, 15]}
                    type="donut"
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="border p-4 list-card">
                <div className="p-3">
                  <p className="re-card-title">Login Toll</p>
                </div>
                <div>
                  <ul className="login-toll-list">
                    <li className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="list-profile me-3">icon</div>
                        <div className="re-list-heading">
                          <p>John Deo</p>
                          <span>Manager</span>
                        </div>
                      </div>
                      <div className="label">
                        {" "}
                        <p>5 min ago</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="list-profile me-3">icon</div>
                        <div className="re-list-heading">
                          <p>John Deo</p>
                          <span>Manager</span>
                        </div>
                      </div>
                      <div className="label">
                        <p>5 min ago</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center justify-content-between ">
                      <div className="d-flex align-items-center">
                        <div className="list-profile me-3">icon</div>
                        <div className="re-list-heading">
                          <p>John Deo</p>
                          <span>Manager</span>
                        </div>
                      </div>
                      <div className="label">
                        <p>5 min ago</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
