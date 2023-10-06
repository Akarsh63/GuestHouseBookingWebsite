import React, { useEffect } from 'react'
import Header from '../components/Header'
import Contactus from '../components/Contactus'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Homemain from '../components/Homemain'
import Query from '../components/Query'
import Gallery from '../components/Gallery'
import Calender from '../components/Calender'

export default function Homepage() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['access_token']);
  useEffect(()=>{if(!cookies.access_token){navigate('/')}})
  return (
    <div>
      <Header />
      <Homemain />
      <Features />
      <Gallery />
      <Calender />
      <Query />
      <Contactus />
      <Footer />
    </div>
  )
}
