import React from "react";
import "../assets/css/porto.scss";
import { ReactComponent as Compo1 } from "../assets/img/Frame 1.svg";

function Porto() {
  return (
    <>
      <div className="porto">
        <span className="line-1"></span>
        <div className="porto-menu">
          <div className="porto-option">
            <></>
          </div>
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
