import { ReactComponent as Logo } from "../assets/img/logo.svg";
import "../assets/css/main.scss";
import { useEffect } from "react";
import { mainLoad } from "../animation";

function Main() {
  useEffect(() => {
    mainLoad();
  },[]);
  return (
    <>
      <div className="main">
        <div className="main__body">
          <div className="main__body__profile">
            <div className="main__body__profile__title">
              <div className="main__body__profile__title__first">
                <h1>creative</h1>
              </div>
              <div className="main__body__profile__title__middle">
                <h1>web developer</h1>
              </div>
              <div className="main__body__profile__title__last">
                <h1>& Designer</h1>
              </div>
            </div>
            <div className="main__body__profile__nav">
              <div className="main__body__profile__nav__list">
                <a href="#">About</a>
                <p>/</p>
                <a href="#">Skill</a>
                <p>/</p>
                <a href="#">Contact</a>
              </div>
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
