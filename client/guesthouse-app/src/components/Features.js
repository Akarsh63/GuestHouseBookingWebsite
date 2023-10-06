import React from 'react'
import './features.css'
export default function Features() {
  return (
      <div id='about' className='Container-features'>
         <div className='about'>
            <div className='about_img'>
               <img src='https://qph.cf2.quoracdn.net/main-qimg-8eb932410b54b3c315d91bee4b11efd0-lq' alt="Guest hpouse" />
            </div>
            <div className='about_desc'>
               <h2 className='aboutushead'>ABOUT US</h2>
                  <p className='textabout'>Indian Institute of Technology Jodhpur was established in 2008, to foster technology education and research in India.
                     The Institute is committed to technological thought and action to benefit the economic development of India.</p>
                  <p className='textabout'>IIT Jodhpur functions from its sprawling residential Permanent Campus of 852 acres on National Highway 65, north-northwest of Jodhpur towards Nagaur.
                     This campus is meticulously planned and envisioned to stand as a symbol of academics – simple, but deep.</p>
                  <p className='textabout'>The Institute is committed to multidisciplinary approach of technology development.
                     Hence, it has established state-of-the-art laboratories for basic research, and has organised its 
                     academic degree activities through Departments and its coordinated research through Centers for Technologies.</p>
            </div>
         </div>
         <div className='features'>
            <div><h2 className='aboutushead'>Facilities</h2></div>
            <div className='facilities'>
               <div>
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
      </div>
  )
}

{/* <div>What we Provide?</div>
                <ul>
                    <li>1. A well furnished, air-conditioned guest house </li>
                    <li>2. WIFI connectivity</li>
                    <li>3. Private Ensuite bathroom</li>
                    <li>4. Breakfast, Lunch and Dinner </li>
                    <li>5. Writing Table, Wardrobe and Luggage Rack </li>
                </ul>
            </div> */}