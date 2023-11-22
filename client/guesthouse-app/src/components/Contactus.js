import React, {useEffect} from 'react';
import './contactus.css';
import Contactcomponent from './Contactcomponent';
import { Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


export default function Contactus() {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0, 
  });

  useEffect(() => {
    console.log(inView)
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [controls, inView]);

  return (
    // <div id='contact'>
    <motion.div className='homecomp5'
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <Box  className='contact-details'>
        <Contactcomponent
          heading={"Address"}
          data={
            "NH 62, Surpura Bypass Rd, Karwar, Jheepasani, Rajasthan 342030"
          }
          icon={<LocationOnIcon sx={{ fontSize: '40px', fill: '#1e1e1e' }} />}
        />
        <Contactcomponent 
        heading={"Phone Number"} 
        data={"+191 280195"} 
        icon={< PhoneIcon sx={{ fontSize: '40px', fill: '#1e1e1e' }}/>}
        />
        <Contactcomponent 
        heading={"Email"} 
        data={"guesthouse@iitj.ac.in"}
        icon={<MailIcon sx={{ fontSize: '40px', fill: '#1e1e1e' }}/>}
        />
      </Box>
    </motion.div>
  );
}
