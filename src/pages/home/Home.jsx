import React from 'react'
import Header from '../../components/MainHeader'
import './Home.css'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Programs/>
        <Values/>
        {/* <FAQs/> */}
        <Testimonials/>
    </div>
  )
}

export default Home