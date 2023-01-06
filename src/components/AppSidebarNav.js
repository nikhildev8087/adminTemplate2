import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

export const AppSidebarNav = ({items}) => {
    const location = useLocation()
    const navLink = (name, icon, badge) => {
        return (
            <>
             {icon && icon}
             {name && name}
             {badge && (
              <div className='badge ms-auto'> {badge.text}</div>  
             )}
            </>
        )
    }

    const navItem = (item, index) => {
        const {component, name, badge, icon, ...rest } = item
        const Component  = component

        return (
            <li className='nav-item' key={index}>
            <NavLink  className="nav-link" 
            key={index}
            {...(rest.to && !rest.items && {
                component:NavLink,
            })}
            {...rest}
            >
                {navLink(name, icon, badge)}
            </NavLink>
            </li>
        )
    }

    const navgroup = (item, index) => {
        const {component, name, icon, to, ...rest} = item
        const Component = component;

        return (
            <div idx={String(index)}
            className="nav-group dropdown"
            key={index}
            toggler={navLink(name,icon)}
            visible={location.pathname.startsWith(to)}
            {...rest}
            >
                
                <ul className='dropdown-menu'>
                <li className='dropdown-item'>
                {item.items?.map((item, index) => 
                 item.items ? navgroup(item, index) : navItem(item,index),
                )}
                </li>
                </ul>
            </div>
        )
    }
  return (
    <React.Fragment>
        {items && 
        items.map((item, index)=> (item.items ? navgroup(item, index) : navItem(item, index)))
        }   
    </React.Fragment>
  )
}

AppSidebarNav.prototype={
    items : PropTypes.arrayOf(PropTypes.any).isRequired,
}
