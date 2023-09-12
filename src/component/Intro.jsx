import React, { useEffect, useState } from "react";
import "../assets/css/intro.scss";
import Image from "../assets/img/003014.jpg";

function Intro() {
  const [hand, setHand] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setHand((prev) => prev + ".");
      if (hand.length > 2) {
        setHand("");
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [hand]);

  return (
    <div className="sk">
      <div className="sk__text">
        <span></span>
        <div className="textloop">
          <h3> intro intro intro intro intro intro intro intro intro intro</h3>
          <h3> intro intro intro intro intro intro intro intro intro intro</h3>
          <h3> intro intro intro intro intro intro intro intro intro intro</h3>
        </div>
        <span></span>
      </div>
      <div className="sk__about">
        <div className="sk__about__capt">
          <h4>Hi!</h4>
          <p>
            i’m a quick learner and detail oriented about frontend development
            with a background in UI and UX design. Capable of working with a
            variety of technology. Have great interest in visuals. Work in a
            fully agile way.
          </p>
          <div className="sk__about__capt__img">
            <img src={Image} />
          </div>
        </div>
        <div className="sk__about__item">
          <div className="sk__about__item__list1">
            <h4>web development</h4>
          </div>
          <div className="sk__about__item__list1">
            <h4>designer graphic</h4>
          </div>
          <h5 className="sk__about__item__load">still counting{hand}</h5>
        </div>
      </div>
    </div>
  );
}

export default Intro;
