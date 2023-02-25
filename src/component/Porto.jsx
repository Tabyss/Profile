import React from "react";
import "../assets/css/porto.scss";
import { ReactComponent as Compo1 } from "../assets/img/Frame 1.svg";
import { ReactComponent as Triangle } from "../assets/img/triagle.svg";
import { listPorto } from "../assets/img/result/index";

function Porto() {
  const scroll = (e) => {
    let scrol = document.getElementById("menu");
    scrol.scrollLeft += e.deltaY;
  };

  return (
    <>
      <div className="porto">
        <span className="line-1"></span>
        <div className="porto-menu" id="menu" onWheel={scroll}>
          {listPorto.map((slide, s) => {
            return (
              <div className="porto-option" key={s}>
                <div className="option-image">
                  <img
                    className="image-option"
                    src={slide.image}
                    alt={slide.alt}
                  />
                </div>
                <div className="option-header">
                  <div className="option-header-main">
                    <p>{slide.desc}</p>
                    <h1>{slide.title}</h1>
                    <h2>{slide.key}</h2>
                  </div>
                  <div className="option-header-comp">
                    <Triangle className="triangle" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <span className="line-2"></span>
        <div className="porto-asesor">
          <p>porto by me</p>
          <span className="line-3"></span>
          <Compo1 />
        </div>
      </div>
    </>
  );
}

export default Porto;
