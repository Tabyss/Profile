import React, { useEffect, useState } from "react";
import landingPic from "../../assets/img/landing-pic.png";
import { ReactComponent as Barcode } from "../../assets/img/barcode.svg";
import { ReactComponent as Asset4 } from "../../assets/img/Asset-4.svg";
import "./landing.scss";
import moment from "moment";

function Landing() {
  const [time, setTime] = useState("");
  const [shake, setShake] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const real = setInterval(() => {
      setTime(moment().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(real);
  }, []);

  useEffect(() =>{
    const real = setInterval(() => {
      setShake(!shake)
    }, (shake ? 400 : 7000));

    return () => clearInterval(real);

  }, [shake])

  return (
    <div className="landing">
      <div className="landing-image">
        <img src={landingPic} />
      </div>
      <div className="landing-main">
        <div className="landing-main-skill">
          <p>Web Developer and Designer</p>
        </div>
        <div className="landing-main-title">
          <h1 className={`${shake ? "shake" : ""}`}>THABYS</h1>
          <p>©</p>
        </div>
      </div>
      <div className="landing-legend">
        <div className="landing-legend-barcode">
          <Barcode />
          <div className="landing-legend-barcode-time">
            <p>{time}</p>
            <h3>{moment(date).format("ddd D MMM")}</h3>
          </div>
        </div>
        <div className="landing-legend-skill">
          <p>Web Developer and Designer</p>
        </div>
        <div className="landing-legend-year">
          <h3>{moment(date).format("YYYY")}</h3>
          <Asset4 />
        </div>
      </div>
    </div>
  );
}

export default Landing;
