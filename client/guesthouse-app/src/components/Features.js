import React, { useEffect } from 'react'
import './features.css'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function Features() {

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
   <motion.div className='homecomp2' id='about'
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 1 }}
   >
       <div className='about'>
            {/* <div className='about_img'>
                <img src='https://qph.cf2.quoracdn.net/main-qimg-8eb932410b54b3c315d91bee4b11efd0-lq' alt="Guest hpouse" />
            </div> */}
            <div className='about_desc'>
               <div>
               <p className="abouttop" >Welcome to our guest house booking website!</p>
               <h2 className='aboutushead'>About our college</h2>
               <p className='textabout'>Indian Institute of Technology Jodhpur was established in 2008, to foster technology education and research in India.
                        The Institute is committed to technological thought and action to benefit the economic development of India.
               IIT Jodhpur functions from its sprawling residential Permanent Campus of 852 acres on National Highway 65, north-northwest of Jodhpur towards Nagaur.
                        This campus is meticulously planned and envisioned to stand as a symbol of academics – simple, but deep.The Institute is committed to multidisciplinary approach of technology development.</p>
               {/* <p className='textabout'>
                  Hence, it has established state-of-the-art laboratories for basic research, and has organised its 
                  academic degree activities through Departments and its coordinated research through Centers for Technologies.</p> */}
                </div>
            </div>
       </div>
       <div className='features'>
         <div><h2 className='aboutushead' style={{textAlign:'center',marginBottom:'80px'}}>Explore the features we provide</h2></div>
         <div className='facilities'>
           <div>
           <h1>Comfortable Rooms</h1>
           <p>We provide cozy and comfortable rooms for a pleasant stay.</p>
            <ul>
               <li>AC Rooms</li>
               <li>Dining Hall</li>
               <li>Free High Speed Wi-fi Internet</li>
               <li>Work desk</li>
               <li>24 X 7 Medical Facility</li>
               <li>Hygenic Washroom</li>
            </ul>
           </div>
           <div>
            <h1>Comfortable Rooms</h1>
            <p>We provide cozy and comfortable rooms for a pleasant stay.</p>
            <ul>
               <li>24 X 7 CC TV Surveillance</li>
               <li>Restaurant</li>
               <li>Breakfast, Lunch, Dinner</li>
               <li>Mineral Water</li>
               <li>Dataport</li>
               <li>Water Purification System</li>
               </ul>
           </div>
           <div>
           <h1>Comfortable Rooms</h1>
           <p>We provide cozy and comfortable rooms for a pleasant stay.</p>
            <ul>
               <li>Car Parking</li>
               <li>Lush Green Campus</li>
               <li>24 X 7 Security service</li>
               <li>Telephone service</li>
               <li>Laundry service</li>
               <li>Tea making (in Room) facilities</li>
               </ul>
           </div>
           <div>
           <h1>Comfortable Rooms</h1>
           <p>We provide cozy and comfortable rooms for a pleasant stay.</p>
            <ul>
               <li>Car Parking</li>
               <li>Lush Green Campus</li>
               <li>24 X 7 Security service</li>
               <li>Telephone service</li>
               <li>Laundry service</li>
               <li>Tea making (in Room) facilities</li>
               </ul>
           </div>
           </div>
       </div>
       </motion.div>
  )
}
