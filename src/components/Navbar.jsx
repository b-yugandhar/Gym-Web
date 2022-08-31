import React from 'react'
import './Navbar.css'
import Logo from '../images/logo.png'
import { Link,NavLink } from 'react-router-dom'
import { links } from '../data'
import {GoThreeBars} from 'react-icons/go'
import { useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
    const[isNavShowing,setIsNavShowing]=useState(false);
    const handlebtn =( )=>{
        setIsNavShowing(!isNavShowing)
    }

  return (
    <nav>
        <div className="container nav_container">
            <Link to='/'onClick={!handlebtn} className='logo'>
                <img src={Logo} alt="" />
            </Link>
            <ul className={isNavShowing ?"nav_links show_nav" :"nav_links  hide_nav"}>
                  {
                    links.map(({name,path},index)=>{
                        return(
                            <li onClick={handlebtn} key={index}>
                            <NavLink to={path} className={({isActive})=> isActive ? "active-nav" : " " } >{name}</NavLink>
                            </li>
                        )
                    })
                  }
            </ul>
            <button className="nav_toggle-btn"  onClick={handlebtn}>
                  {
                    isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
                  }
            </button>
        </div>

    </nav>
  )
}

export default Navbar