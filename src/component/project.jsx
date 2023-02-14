import "../assets/css/project.scss";
import React, { useRef, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { RiArrowRightSFill } from "react-icons/ri";
import { IconContext } from "react-icons";

function Project({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  // const timeout = useRef(null);

  const next = (next) => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // setInterval(next, 8000);

  const skillList = (
    <div className="skill">
      <div className="sk">
        <div className="sk__item">
          <div className="sk__list1">
            <span>frontend development</span>
          </div>
          <div className="sk__list1">
            <span>designer graphic</span>
          </div>
          <h5>and still counting...</h5>
        </div>
        <div className="sk__about">
          <span className="sk__img"></span>
          <p>
            A quick learner and detail oriented about frontend development with
            a background in UI and UX design. Capable of working with a variety
            of technology. Have great interest in visuals. Work in a fully agile
            way.
          </p>
        </div>
      </div>
    </div>
  );

  const projectList = (
    <div className="slider">
      {slides.map((slide, slides) => {
        return (
          <div className="slider_data" key={slides}>
            {slides === current && (
              <div className="data_img">
                <h1 className="img_title">{slide.title}</h1>
                <img className="img_mate" src={slide.image} alt={slide.alt} />
              </div>
            )}
          </div>
        );
      })}
      <div className="slider_load">
        <h2>Portofolio</h2>
        <p>All on progress...</p>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <BiLeftArrow onClick={prev} />
        </IconContext.Provider>

        <IconContext.Provider value={{ size: "1.5em" }}>
          <RiArrowRightSFill onClick={next} />
        </IconContext.Provider>
      </div>
    </div>
  );

  return (
    <div className="prj">
      <div className="prj__base">
        <div className="prj__main">{skillList}</div>
        {projectList}
      </div>
    </div>
  );
}

export default Project;
