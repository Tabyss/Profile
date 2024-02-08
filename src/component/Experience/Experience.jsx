import React from "react";
import "../Experience/experience.scss";
import logo1 from "../../assets/img/logo01.png";
import logo2 from "../../assets/img/logo02.png";
import logo3 from "../../assets/img/logo03.png";
import logoL1 from "../../assets/img/logo12.png";
import logoL2 from "../../assets/img/logo22.png";
import logoL3 from "../../assets/img/logo32.png";

function Experience() {
  return (
    <div className="experi">
      <div className="experi-title">
        <h1>experience</h1>
      </div>
      <div className="experi-main">
        {listExperi.map((list) => {
          return (
            <div className={`experi-main-item n-${list.id}`}>
              <div className="experi-main-item-menu">
                <div className="experi-main-item-menu-face">
                  <div className="experi-main-item-menu-face-front">
                    <img src={list.logo} />
                    <div className="experi-main-item-menu-face-front-title">
                      <h2>{list.title}</h2>
                      <h1>{list.name}</h1>
                      <div className="experi-main-item-menu-face-front-title-key">
                        {list.key.map((key) => {
                          return <p>{key}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="experi-main-item-menu-face-back">
                    <img src={list.logoL} />
                    <p>{list.capt}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;

const listExperi = [
  {
    id: 1,
    title: "Assistant Professor",
    name: "Graphic Design",
    logo: logo3,
    logoL: logoL3,
    capt: "Helping students who have difficulty practicing using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign. and Assist the lecturer with explaining the materials if the lecturer is unable to attend.",
    key: ["Photoshop", "illustrator", "indesign"],
  },
  {
    id: 2,
    title: "UI/UX",
    name: "Designer",
    logo: logo1,
    logoL: logoL1,
    capt: "this position Collaborated with frontend and backend developer team to offer feedback about design effectiveness. Redesign e-commerce UI website and consider user experience. and of course Create codable designs.",
    key: ["UI", "UX"],
  },
  {
    id: 3,
    title: "React",
    name: "Developer",
    logo: logo2,
    logoL: logoL2,
    capt: "as a react developer, i have been intern in this position for 6 month. add new feature and Revamp ui to improve user experience for client. integration to get data from restful api.",
    key: ["React", "Query", "Redux", "Rest API"],
  },
];
