import React from 'react'
import './Contact.css'
import Header from '../../components/Header'
import HeaderImage from  '../../images/contact.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp } from 'react-icons/io'



const Contact = () => {
  return (
    <>
    <Header title= "Contact Us" image={HeaderImage}>
      You can contact us by below mention ways for our services, we will replay as soon as possible
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