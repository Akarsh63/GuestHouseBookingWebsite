import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import './dashboard.css';
import { MdMenu} from "react-icons/md";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const Dashboard = ({setOpen}) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['admin_access_token']);
  const adminlogout = async(e)=>{
    e.preventDefault();
    removeCookie('admin_access_token');
    navigate('/')
  }
  return (
    <div>
       <div className='dashboard'>
          <Link to="/dashboard/admins" onClick={()=>{setOpen(false)}}>All Bookings</Link>
          <Link to="/dashboard/admins/details" onClick={()=>{setOpen(false)}}>Get Details</Link>
          <Link to="/dashboard/admins/newbooking" onClick={()=>{setOpen(false)}}>New Booking</Link>
          
          <Link to="/dashboard/admins/rooms" onClick={()=>{setOpen(false)}}>New Room/Admin</Link>
          <Link onClick={adminlogout} >Log Out</Link>
    </div>
    </div>
    
  );
};

export default Dashboard;
