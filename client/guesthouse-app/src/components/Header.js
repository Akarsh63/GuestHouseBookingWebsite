import React, { useState,useEffect} from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import { useCookies } from 'react-cookie';
export default function Header() {
  const navigate = useNavigate();
  const [shownav,setshownav] = useState(false);
  const [setnav,setsetnav] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const logout = async(e)=>{
    e.preventDefault();
    sessionStorage.clear();
    removeCookie('access_token');
    navigate('/')
  }
const handlecontactpage=(event)=>{
  event.preventDefault()
  setshownav(!shownav)
  navigate('/Home')
  window.scrollTo(0,1000)
}
  const backgroundchange=()=>{
     if (window.innerWidth>=768){
        setsetnav(true);
     }
     else{
      setsetnav(false)
     }
  }
  window.addEventListener('scroll', backgroundchange);
  
  return (
      <div className='nav_bar'>
        <div className='nav_bar_all col' style={{ opacity:  1 }}>
          <div className='logo'>
            IIT JODHPUR
          </div>
          <div className='nav_bar_all_res'><MdMenu className="resmenu" onClick={()=>{setshownav(!shownav)}} /></div>
          <div className='nav_links'>
            <ul className={!shownav?'navitems hide':'navitems'}>
              <li><Link to='/Home' className='header_links' onClick={()=>{setshownav(!shownav)}}>Home</Link></li>
              <li><Link to='#' className='header_links' onClick={()=>{setshownav(!shownav)}}>About Us</Link></li>
              <li><Link to='#' className='header_links' onClick={()=>{setshownav(!shownav)}}>Gallery</Link></li>
              <li><Link to="#" className="header_links" onClick={handlecontactpage}>Avaibility</Link></li>
              <li><Link to="/Home" className="header_links" onClick={handlecontactpage}>Contact Us</Link></li>
              <li><Link to='/Bookings' className='header_links' onClick={()=>{setshownav(!shownav)}}>Bookings</Link></li>
              
              <li><button onClick={logout}>Logout</button></li>
            </ul>
          </div>
        </div>
        
      </div>
  )
}
