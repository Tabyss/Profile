import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./component/Landing/Landing";
import Intro from "./component/Intro/Intro";
import Welcome from "./component/Divider/Welcome";
import About from "./component/Divider/About";
import Skill from "./component/Skill/Skill";
import Thabys from "./component/Divider/Thabys";
import Experience from "./component/Experience/Experience";
import Porto from "./component/Porto/Porto";
import Footer from "./component/Footer/Footer";
import Preload from "./component/Preload";

function App() {
  const [hit, setHeat] = useState(false);
  return (
    <>
      <Preload />
      <Landing />
      <Welcome />
      <Intro />
      <About />
      <Skill />
      <Thabys />
      <Experience />
      <Porto />
      <Link />
      <Footer />
    </>
  );
}

function Link() {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="/porto">
        <Route path="/porto/1" element={<Trip/>}/>
      </Route> */}
    </Routes>
  );
}

export default App;
