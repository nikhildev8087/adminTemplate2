import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Users = () => {
  return (
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
  )
}

export default Users
