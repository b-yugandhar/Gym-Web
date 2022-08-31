import React from "react";
import Image from "../images/values.jpg";
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus aliquid laboriosam ipsum nulla voluptas, et, culpa ut,
              mollitia veniam magnam dolor eum voluptatibus nisi minima impedit
              repellendus a nemo natus.
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
