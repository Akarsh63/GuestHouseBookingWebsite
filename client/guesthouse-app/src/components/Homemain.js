import React, { useEffect, useState,useRef } from 'react'
import './homemain.css'
import { FaLongArrowAltRight} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Homemain() {
    const imageUrls = [
        `url('https://www.hindustantimes.com/ht-img/img/2023/06/09/1600x900/iit_jodhpur_1686300921343_1686300927090.jpg')`,
        `url('https://iitj.ac.in/techscape/vol02/issue03/images/editorial_06052022.png')`,
        `url('https://iitj.ac.in/techscape/vol04/issue01/sliderimg/19_28072023.jpg')`,
        // Add more image URLs as needed
      ];
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000); 
    
        return () => clearInterval(interval);
      }, []);
    
      const currentImageUrl = imageUrls[currentImageIndex];      
    const navigate = useNavigate();
    const homeref=useRef(null)
    
    
  return (
      <div className='main_img' style={{ backgroundImage: currentImageUrl }} id='homeref' >
          <div className='overlay'>
            <h1>Experience Comfortable Stays at IIT Jodhpur</h1>
            <h2>Have a Wonderful Stay!</h2>
            <button className='overlay_btn' onClick={()=>{navigate('/booknow')}}>
              Book Now
              <span>
                <FaLongArrowAltRight className='arrow' />
              </span>
            </button>
            
        </div>
        
      </div>
      
  )
}
export default Homemain;