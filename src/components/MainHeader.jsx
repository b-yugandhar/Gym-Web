import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'
import './Header.css'
const Header = () => {
  return (
    <>
        <div className="main_header">
          <div className="container main_header_container">
            <div className="main_header-left">
                <h4>#100Days of workout</h4>
                <h1>Join The Legends Of Fitness World</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed expedita nam consequuntur doloribus necessitatibus dolores distinctio id officia laborum molestiae, quos vero ipsa saepe pariatur debitis iure hic iusto quaerat.</p>
                <Link to='/plans' className='btn lg'>Get Started</Link>
            </div>
            <div className="main_header-right">
                <div className="main_header-circle"></div>
                <div className="main_header-image">
                  <img src={Image} alt="" />
                </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Header