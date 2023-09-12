import { ReactComponent as Logo } from "../assets/img/logo.svg";
import "../assets/css/main.scss";
import { useEffect } from "react";
import { mainLoad } from "../animation";

function Main() {
  return (
    <>
      <div className="main">
        <div className="main__body">
          <div className="main__body__profile">
            <div className="main__body__profile__title">
              <h1 className="main__body__profile__title__first">creative</h1>
              <h2 className="main__body__profile__title__last">
                web developer
              </h2>
              <h2 className="main__body__profile__title__last">& Designer</h2>
            </div>
            <div className="main__body__profile__nav">
              <a className="main__body__profile__nav__list" href="#">
                About
              </a>
            </div>
          </div>
        </div>
        <div className="main__btn">
          <p>Contact Me</p>
          <a href="mailto:shabbahatha86@gmail.com">shabbahatha86@gmail.com</a>
        </div>
        <div className="main__identity">
          <Logo className="Logo" />
          <div className="main__identity__name">
            <h4 className="main__identity__name__first">Shabbah</h4>
            <h4 className="main__identity__name__last">Athabiyyu</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
