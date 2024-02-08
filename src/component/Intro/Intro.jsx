import React, { useEffect, useState } from "react";
import Image from "../../assets/img/003014.jpg";
import { ReactComponent as Frame } from "../../assets/img/frame.svg";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import "./Intro.scss";

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
    <div className="intro">
      <div className="intro-about">
        <div className="intro-about-capt">
          <div className="intro-about-capt-main">
            <h4>Hi!</h4>
            <p>
              i’m SHabbah Athabiyyu, but in this scene you can call me thabys.
              i’m grow in this universe, Specifically in Yogyakarta indonesia. I
              am a passionate frontend developer and UI/UX designer. With a
              background in graphic design, my expertise in JavaScript allows me
              to bring designs to life with dynamic interactivity. I create
              intuitive and engaging interfaces, blending aesthetics with
              effective functionality. For me, design is not just about
              appearance but also about how a product functions and interacts
              with users. I believe that merging design and development is the
              key to crafting exceptional and satisfying digital solutions for
              users.
            </p>
          </div>
          <div className="intro-about-capt-logo">
            <div className="intro-about-capt-logo-frame1">
              <Frame className={"intro-frame-1"} />
              <Frame className={"intro-frame-2"} />
            </div>
            <Logo fill={"#fff"} className={"thabys-logo1"} />
            <div className="intro-about-capt-logo-frame2">
              <Frame className={"intro-frame-3"} />
              <Frame className={"intro-frame-4"} />
            </div>
          </div>
        </div>
        <span className="intro-about-divider"></span>
        <div className="intro-about-item">
          <div className="intro-about-item-image">
            <img src={Image} />
          </div>
          <div className="intro-about-item-list1">
            <h4>web development</h4>
          </div>
          <div className="intro-about-item-list1">
            <h4>designer graphic</h4>
          </div>
          <div className="intro-about-item-load">
            <h5>still counting</h5>
            <h5>{hand}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
