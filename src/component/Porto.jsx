import React, { useState } from "react";
import "../assets/css/porto.scss";
// import { ReactComponent as Compo1 } from "../assets/img/Frame 1.svg";
// import { ReactComponent as Triangle } from "../assets/img/triagle.svg";
import { listPorto } from "../assets/img/result/index";
import Modals from "./Modals";

function Porto() {
  const [popup, setPopup] = useState(false);
  const scroll = (e) => {
    let scrol = document.getElementById("menu");
    scrol.scrollLeft += e.deltaY;
  };

  return (
    <>
      <div className="porto">
        <span className="line-1"></span>
        <div className="porto-menu" id="menu" onWheel={scroll}>
          {listPorto.map((slide) => {
            return (
              <div className="porto-option" key={slide.id}>
                <div className="option-image">
                  <img
                    className="image-option"
                    src={slide.image}
                    alt={slide.alt}
                  />
                </div>
                <div className="option-header">
                  <div className="option-header-main">
                    <h1>{slide.title}</h1>
                    <p>{slide.desc}</p>
                    <button onClick={() => setPopup(!popup)}>click</button>
                  </div>
                  <div className="option-header-comp">
                    <div className="keyword">
                      {slide.key?.map((k) => {
                        return <p>{k}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {popup ? <Modals /> : null}
        <span className="line-2"></span>
        <div className="porto-asesor">
          <p>porto by me</p>
          <span className="line-3"></span>
        </div>
      </div>
    </>
  );
}

export default Porto;
