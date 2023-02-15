import "../assets/css/about.scss";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as Bar } from "../assets/img/barcode.svg";
import Skill from "./Skill";
import Track from "./Track";

function About() {
  return (
    <div className="about">
      <div className="about_name">
        <div className="grid">
        <h1 className="c1">Hi, I am</h1>
        <h2 className="c2">Shabbah</h2>
        <h2 className="c3">Athabiyyu</h2>
        <p className="c4">MADE IN YOGYAKARTA</p>
        <a className="c5">@thabys</a>
        <div className="c6">
          <p>hobby</p>
          <h2>watch animes</h2>
        </div>
        <p className="c7">est. 2002</p>
        <h2 className="c8">Male</h2>
        <i className="c9">
          <Logo className="logo" />
        </i>
        <i className="c10" >
          {/* <Bar className="bar" /> */}
        </i>
        </div>
      </div>
      <div>
        <Track />
      </div>
      <div className="about-1">
        <Skill />
      </div>
    </div>
  );
}

export default About;
