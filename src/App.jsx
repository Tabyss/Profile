import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import About from "./component/About";
import Skill from "./component/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Link />
    </>
  );
}

function Link() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="skill" element={<Skill />}></Route>
      
    </Routes>
  );
}

export default App;
