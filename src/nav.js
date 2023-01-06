import React from "react";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import BusinessIcon from '@mui/icons-material/Business';

const nav  = [
    {
        component:"Dashboard",
        name:"Admin",
        to:'/dashboard',
        icon:<AutoAwesomeMosaicIcon className="nav-icon"/>,
        // items:[
        //     {
        //     component:"Dashboard",
        //     name: 'Dashboard',
        //     to:"/dashboard",
        //     icon:<GroupIcon className="nav-icon"/>,
        //     },
        //     {
        //         component:"Users",
        //         name: 'sales List',
        //         to:"/users",
        //         icon:<GroupIcon className="nav-icon"/>,
        //         },
        // ],
    },
    {
        component:"CompanyDetails",
        name:"Company Details",
        to:"/comapany-details",
        icon:<ApartmentOutlinedIcon className="nav-icon"/>,
    },
    {
        component:"RolesAndPermission",
        name:"Roles And Permission",
        to:"/rolesandpermission",
        icon:<ApartmentOutlinedIcon className="nav-icon"/>,
    },
  
    {
        component:"Marketing",
        name:"Marketing",
        to:"/marketing",
        icon:<ShoppingCartIcon className="nav-icon"/>,
    },
    {
        component:"PreSales",
        name:"Pre-Sales",
        to:"/pre-sales",
        icon:<ContentPasteIcon className="nav-icon"/>,
    },
    {
        component:"Sales",
        name:"Sales",
        to:"/sales",
        icon:<LocalOfferIcon className="nav-icon"/>,
    },
    {
        component:"Report",
        name:"Report",
        to:"/report",
        icon:<AnalyticsIcon className="nav-icon"/>,
    },
    {
        component:"Projects",
        name:"Project",
        to:"/project",
        icon:<BusinessIcon className="nav-icon"/>,
    },
    {
        component:"Users",
        name:"User",
        to:"/user",
        icon:<GroupIcon className="nav-icon"/>,
        // items:[
        //     {
        //     component:"Users",
        //     name: 'Users List',
        //     to:"/users",
        //     icon:<GroupIcon className="nav-icon"/>,
        //     }
        // ]
    },
    {
        component:"Orders",
        name:"orders",
        to:"/orders",
        icon:<ShoppingCartIcon className="nav-icon"/>,
    }
]

export default nav