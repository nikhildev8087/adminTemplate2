import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Chart from "react-apexcharts";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

const CompanyDetails = () => {
  return (
    <>
      <div className="container">
        <div className="date-format pb-4">
          <div className="date ">
            <div className="form-card">
              <div className="form-title d-flex justify-content-between align-items-center">
                <h3>Company Details</h3>
                <button className="edit-btn"><CreateOutlinedIcon className="edit-icon me-1"/> <span>Edit</span></button>
              </div>
              <hr />
              <div className="form-content">
                <form>
                    <div className="form-title">
                  <div className="d-flex align-items-center justify-content-between">
                    <TextField
                      id="outlined-basic"
                      label="Company Code"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="GST Number"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Pincode"
                      variant="outlined"
                    />

                    <FormControl style={{ width: "100px" }}>
                      <InputLabel id="demo-simple-select-label">
                        Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value="Country"
                        label="Country"
                        onChange=""
                      >
                        <MenuItem value="India">India</MenuItem>
                        <MenuItem value="US">Us</MenuItem>
                        <MenuItem value="Uk">Uk</MenuItem>
                      </Select>
                    </FormControl>
                    
                  </div>
                  <div className="d-flex justify-content-between mt-4">
                    <TextField
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={4}
                      style={{ width: "300px" }}
                    />
                  </div>
                  </div>
                  <div className="form-title">
                    <h3>Business Details</h3>
                  </div>
                    <hr/>
                    <div className="form-title">
                  <div className="d-flex align-items-center justify-content-between">
                    <TextField
                      id="outlined-basic"
                      label="Business Name"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Website"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email Domain"
                      variant="outlined"
                    />
                    </div>
                    </div>
                    <div className="form-title">
                  <div className="d-flex align-items-center justify-content-between">
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Time Zone"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Billing Email"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Social Urls"
                      variant="outlined"
                    />
                    </div>
                    </div>
                    <div className="p-4 d-flex justify-content-end">
                        <button className="cancle-btn">Cancle</button>
                        <button className="save-btn ms-3">Save</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default CompanyDetails;
