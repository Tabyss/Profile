import "../assets/css/footer.scss";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import React from "react";

function Footer() {
  return (
    <div className="foot">
      <div className="foot__copy">
        <Logo fill="white" width="100px" className="logoput" />
        <div className="foot__copy__logo">
          <h1>thabys</h1>
          <i>© 2023 thabys</i>
        </div>
      </div>
      <div className="foot__info">
        <div className="foot__info__contact">
          <h3>Contact Me</h3>
          <a href="mailto:shabbahatha86@gmail.com">shabbahatha86@gmail.com</a>
        </div>
        <div className="foot__info__social">
          <div className="foot__info__social__1">
            <a href="https://instagram.com/thabys?igshid=MzMyNGUyNmU2YQ==">
              Instagram
            </a>
            <a href="https://www.behance.net/Thabys">Behance</a>
            <a href="https://dribbble.com/Thabys">Dribbble</a>
          </div>
          <div className="foot__info__social__2">
            <a>GitHub</a>
            <a href="https://www.linkedin.com/in/thabys/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
