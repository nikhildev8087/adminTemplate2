import React from 'react'
import { NavLink } from 'react-router-dom'

const AppFooter = () => {
  return (
    <footer>
        <div>
            <a>test admin</a>
            <span>2022</span>
        </div>
        <div className='ms-auto'>
            <span>Powerd by</span>
            <a>Admin</a>
        </div>
    </footer>
  )
}

export default AppFooter
