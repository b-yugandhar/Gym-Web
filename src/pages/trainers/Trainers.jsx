import React from "react";
import "./Trainers.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/team.jpg";
import { trainers } from "../../data";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";


import Trainer from "../../components/Trainer";


const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
      Talent wins games, but teamwork and intelligence win championships.
      </Header>
      <section className="trainers">
        <div className="container trainers_container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return <Trainer key={id}  image={image} name={name} job={job} socials={
              [
                {icon:<FaLinkedinIn/>, link:socials[3]},

                {icon:<FaFacebook/>, link:socials[3]},

                {icon:<FaTwitter/>, link:socials[3]},

                


              ]
            } /> ;
          })
          }
        </div>
      </section>
    </>
  );
};

export default Trainers;
