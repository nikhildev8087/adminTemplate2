import React from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import AddIcon from '@mui/icons-material/Add';

const RolesAndPermission = () => {
  function createData(
    name: "string",
    calories: "number",
    fat: "number",
    carbs: "number",
    protein: "number"
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <div className="container">
        <div className="date-format pb-4">
          <div className="date "> 
            <div className="form-card p-3">
                <div className="py-3">
                    <button className="save-btn">Roles</button>
                </div>
              <table class="table" style={{minHeight:"400px"}}>
                <thead>
                 
                  <tr style={{borderTop:"1px solid rgba(0, 0, 0, 0.1)", borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}}>
                    <td scope="col">Role Name</td>
                    <td scope="col">Reporting Role</td>
                    <td scope="col">Users</td>
                    <td scope="col">Created By</td>
                    <td scope="col">Created On</td>
                    <td scope="col">Modified By</td>
                    <td scope="col">Modified On</td>
                    <td scope="col">Action</td>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </table>
              <div className="d-flex justify-content-end">
                <button className="edit-btn"><AddIcon/> Create Role</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RolesAndPermission;
