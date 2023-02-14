import "../assets/css/footer.css";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import React from "react";

function Footer() {
  return (
    <div className="foot">
      <div className="foot__copy">
        <div className="foot__logo">
          <Logo fill="white" width="110px" />
          <h1>thabys</h1>
        </div>
        <i>© 2022 thabys</i>
      </div>
      <div className="foot__contact">
        <h3>Contact Me</h3>
        <a>shabbahatha86@gmail.com</a>
      </div>
      <div className="foot__social">
        <h3>Social</h3>
        <a>Instagram</a>
        <a>Behance</a>
        <a>Twitter</a>
        <a>LinkIn</a>
      </div>
    </div>
  );
}

export default Footer;
