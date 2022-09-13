import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'
import './Header.css'
import pro from '../images/p.jpg'
const Header = () => {
  return (
    <>
        <div className="main_header">
          <div className="container main_header_container">
            <div className="main_header-left">
                <h1>Advancing Your Life</h1>
                <p>Calc Technologies is a leading provider of cutting-edge technologies and services.</p>
                <Link to='/plans' className='btn lg'>Get Started</Link>
            </div>
            <div className="main_header-right">
                <div className="main_header-circle"></div>
                <div className="main_header-image">
                  <img className='header-img-pro' src={pro} alt="" />
                </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Header