import React from 'react'
import './About.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/ab.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import pro from '../../images/p.jpg'


const About = () => {
  return (
    <div>
      <Header title= "About Us" image={HeaderImage}>
      Our comprehensive technological solutions help industry <br />{" "}
            leading companies and individuals achieve greater success.
      </Header>
      <section className="about_story">
        <div className="container about_story-container">
        <div className="about_section-image">
            <img src={pro} alt="" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eveniet nobis officia libero quasi esse voluptatem omnis tenetur itaque sapiente consequuntur cupiditate mollitia blanditiis nisi vel veritatis earum necessitatibus dolore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi cupiditate, explicabo rerum iusto ab necessitatibus eaque voluptate! Obcaecati unde natus ratione deserunt asperiores, tenetur repudiandae illum error blanditiis sint!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione cum alias vitae nesciunt earum quo excepturi blanditiis optio voluptates!</p>

          </div>
          
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eveniet nobis officia libero quasi esse voluptatem omnis tenetur itaque sapiente consequuntur cupiditate mollitia blanditiis nisi vel veritatis earum necessitatibus dolore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi cupiditate, explicabo rerum iusto ab necessitatibus eaque voluptate! Obcaecati unde natus ratione deserunt asperiores, tenetur repudiandae illum error blanditiis sint!</p>

          </div>
          <div className="about_section-image">
            <img src={pro} alt="" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
        <div className="about_section-image">
            <img src={pro} alt="" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eveniet nobis officia libero quasi esse voluptatem omnis tenetur itaque sapiente consequuntur cupiditate mollitia blanditiis nisi vel veritatis earum necessitatibus dolore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi cupiditate, explicabo rerum iusto ab necessitatibus eaque voluptate! Obcaecati unde natus ratione deserunt asperiores, tenetur repudiandae illum error blanditiis sint!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione cum alias vitae nesciunt earum quo excepturi blanditiis optio voluptates!</p>

          </div>
          
        </div>
      </section>
    </div>
  )
}

export default About