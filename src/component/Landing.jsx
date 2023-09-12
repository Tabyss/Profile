import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Intro from "./Intro";
import Skill from "./Skill";
import Project from "./Project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  return (
    <>
      <Main />
      <Intro />
      <Skill />
      <Project />
      <Footer />
    </>
  );
}

export default Landing;
