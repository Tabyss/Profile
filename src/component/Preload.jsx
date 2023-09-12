import React, { useEffect } from "react";
import { ReactComponent as Logo1 } from "../assets/img/logo-1.svg";
import { ReactComponent as Logo2 } from "../assets/img/logo-2.svg";
import "../assets/css/preload.scss";
import { preLoad } from "../animation";

function Preload() {
  useEffect(() => {
    preLoad();
  }, []);
  return (
    <div className="preload">
      <div className="preload__logo">
        <Logo1 fill="#ffffff" className="preload__logo_1" />
        <Logo2 fill="#ffffff" className="preload__logo_2" />
      </div>
    </div>
  );
}

export default Preload;
