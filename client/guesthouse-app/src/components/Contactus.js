import React from 'react';
import './contactus.css';
import Contactcomponent from './Contactcomponent';
import { Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
export default function Contactus() {
  return (
    <div id='contact'>
    <Box  className='contact-details'>
      <Contactcomponent
        heading={"Address"}
        data={
          "Indian Institute of Technology Jodhpur N.H. 62, Nagaur Road, Karwar Jodhpur 342030 Rajasthan (India)"
        }
        className='hover-contact'
        sx={{ cursor: 'pointer', '&:hover': { transform: 'scale(1.05)' } }}
        icon={<LocationOnIcon sx={{ fontSize: '40px', fill: '#778075' }} />}
      />
      <Contactcomponent 
        heading={"Phone Number"} 
        data={"+191 280195"} 
        icon={< PhoneIcon sx={{ fontSize: '40px', fill: '#778075' }}/>}
       />
      <Contactcomponent 
        heading={"Email"} 
        data={"guesthouse@iitj.ac.in"}
        icon={<MailIcon sx={{ fontSize: '40px', fill: '#778075' }}/>}
      />
    </Box>
    </div>
  );
}
