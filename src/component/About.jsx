import "../assets/css/about.scss";
import { ReactComponent as Barcode } from "../assets/img/barcode1.svg";
import Skill from "./Skill";
import Track from "./Track";

function About() {
  return (
    <div className="about">
      <div className="about_name">
        <h1>Hi, I am</h1>
        <h2>Shabbah</h2>
        <p>Athabiyyu</p>
      </div>
      <div className="about-1">
        <Skill />
      </div>
      <div>
        <Track />
      </div>
    </div>
  );
}

export default About;
