
import { ReactComponent as Logo1 } from "../assets/img/logo-1.svg";
import { ReactComponent as Logo2 } from "../assets/img/logo-2.svg";
import "./preload.scss";
import { preLoad } from "../animation";
import { useEffect } from "react";

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
