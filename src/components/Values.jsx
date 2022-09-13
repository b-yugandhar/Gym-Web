import React from "react";
import Image from "../images/proimg.jpg";
import SectionHead from "./SectionHead";
import { AiFillCaretRight } from "react-icons/ai";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
          <img src={Image} alt="values_image" />
        </div>
        <div className="values_right">
          <SectionHead icon={<AiFillCaretRight />} title="Values" />
            <p>
              We provide best value for our customers
            </p>

           <div className="values_wrapper">
           {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values_value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </Card>
              );
            })}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
