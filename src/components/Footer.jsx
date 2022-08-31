import React from 'react'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import { AiOutlineTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="footer logo" />
                </Link>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nulla blanditiis dolore, vero expedita maxime dicta suscipit neque, laudantium repudiandae fugiat quod ut ad fuga laborum quasi reiciendis similique! Architecto.</p>
                <div className="footer_socials">
                    <a href="#" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="#" target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="#" target='_blank' rel='noreferrer noopener'><FaInstagram/></a>
                    <a href="#" target='_blank' rel='noreferrer noopener'><FaTwitter/></a>

                </div>
            </article>
            <article>
                <h4>permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainer'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>

            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Student</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQs</Link>

            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact'>Contact</Link>
                <Link to='/s'>Support</Link>
                

            </article>
            <div className="footer_copyright">
                <small>2022 EGATOR TUTORIALS &copy; All RIGHTS RESERVED </small>
            </div>
        </div>
    </footer>
  )
}

export default Footer