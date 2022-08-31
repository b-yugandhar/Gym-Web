import React from 'react'
import './Notfound.css'
import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    
    <section>
      <div className="container notfound_container">
        <h1>page not found</h1>
        <Link to='/' className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound