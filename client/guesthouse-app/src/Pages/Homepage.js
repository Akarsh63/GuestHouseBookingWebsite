import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Contactus from '../components/Contactus'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Homemain from '../components/Homemain'
import Query from '../components/Query'
import ImageGallery from '../components/ImageGallery'
import { Link as ScrollLink, Element } from 'react-scroll';

export default function Homepage() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['access_token']);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setVisible(window.scrollY === 0)
    })
  }, [])

  useEffect(() => { if (!cookies.access_token) { navigate('/') } })

  const movedown = () => {
    window.scrollTo({
      top: document.getElementById('homeref').offsetHeight - document.getElementById('header').offsetHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{position: 'relative'}} >
      {
        visible ? 
        <div className='scroll-top' onClick={movedown}>
          <div className='scroll' ></div>
        </div>
        :
        ''
      }
      <Header />
      <Homemain />
      <Element name="about">
        <Features />
      </Element>
      <Element name="gallery">
        <ImageGallery />
      </Element>
      <Element name="contact">
        <Query />
      </Element>
      <Contactus />
      {/*       
      

      <Element name="availability">
        <AvailabilitySection />
      </Element>

      */}
      <Footer />
    </div>
  )
}
