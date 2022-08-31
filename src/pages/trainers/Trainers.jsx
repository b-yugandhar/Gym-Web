import React from "react";
import "./Trainers.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";


const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        lorem iusto nuquam unde laboriosam experdita accusan est aut
        molestianfuit suscipt quad
      </Header>
      <section className="trainers">
        <div className="container trainers_container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return <Trainer key={id}  image={image} name={name} job={job} socials={
              [
                {icon:<FaLinkedinIn/>, link:socials[3]},

                {icon:<FaLinkedinIn/>, link:socials[3]},

                {icon:<FaLinkedinIn/>, link:socials[3]},

                {icon:<FaLinkedinIn/>, link:socials[3]},


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
