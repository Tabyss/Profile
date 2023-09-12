import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Porto from "./component/Porto";
import Landing from "./component/Landing";
import Preload from "./component/Preload";

function App() {
  return (
    <>
      <Preload />
      <Link />
    </>
  );
}

function Link() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="porto" element={<Porto />}></Route>
    </Routes>
  );
}

export default App;
