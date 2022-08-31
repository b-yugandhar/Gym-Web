import React from 'react'
import './Contact.css'
import Header from '../../components/Header'
import HeaderImage from  '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp } from 'react-icons/io'



const Contact = () => {
  return (
    <>
    <Header title= "About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit ex debitis veritatis dolorem laudantium?
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:calctechnologies@gmail.com" target='_blank'><MdEmail/></a>
          <a href="#" target='_blank'><BsMessenger/></a>
          <a href="#" target='_blank'><IoLogoWhatsapp/></a>
        
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact