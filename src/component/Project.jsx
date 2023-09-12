import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Deadline from "../assets/img/dead-line.png";
import "../assets/css/project.scss";
import { slide } from "../assets/img/porto";

function Project() {
  return (
    <div className="prj">
      <div className="prj__porto">{/* <img src={Deadline} /> */}</div>
      <div className="prj__base">
        <div className="prj__base__title">
          <h2>Collection</h2>
        </div>
        <div className="prj__base__caption">
          <button>
            <AiOutlineArrowRight />
          </button>
          <p>
            I'm not only make projects like the styles used, I can do more than
            that. Sweet, cute, elegant, formal, gothic of course I can fit all
            the styles. So, check All my random creative stuff.
          </p>
        </div>
      </div>
      <div className="prj__load">
        {slide.map((porto) => {
          return (
            <div key={porto.id} className={"prj__load__card" + porto.id}>
              <img src={porto.image} className="prj__load__card__image" />
              <div className="prj__load__card__caption">
                <h4>{porto.title}</h4>
                <p>{porto.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
