import React, { useEffect, useState } from "react";
import { FaFigma, FaReact, FaSass, FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import "../assets/css/skill.scss";

const skill = [
  {
    id: 1,
    name: "Web Development",
    menu: [
      {
        no: 1,
        first: "Javascript",
        second: "JS",
      },
      {
        no: 2,
        first: "React",
        second: <FaReact />,
      },
      {
        no: 3,
        first: "Sass",
        second: <FaSass />,
      },
      {
        no: 4,
        first: "HTML",
        second: <FaHtml5 />,
      },
      {
        no: 5,
        first: "Rest",
        second: "API",
      },
      {
        no: 6,
        first: "NextJS",
        second: "N",
      },
      {
        no: 7,
        first: "ExpressJS",
        second: <SiExpress />,
      },
    ],
  },
  {
    id: 2,
    name: "Designer Graphic",
    menu: [
      {
        no: 1,
        first: "Design",
        second: "UI",
      },
      {
        no: 2,
        first: "Design",
        second: "UX",
      },
      {
        no: 3,
        first: "Figma",
        second: <FaFigma />,
      },
      {
        no: 4,
        first: "Photoshop",
        second: "PS",
      },
      {
        no: 5,
        first: "Illustrator",
        second: "AI",
      },
    ],
  },
];

function Skill() {
  const [getid, setGetid] = useState("1");
  const handletab = (e) => {
    setGetid(e.target.id);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (getid === "1") {
        setGetid("2");
      } else {
        setGetid("1");
      }
    }, 10000);
    return () => {
      clearInterval(id);
    };
  }, [getid]);

  return (
    <div className="skills">
      <div className="skl">
        <div className="skl_job">
          {skill.map((list, i) => {
            return (
              <div key={i}>
                <button
                  id={list.id}
                  onClick={handletab}
                  disabled={getid === `${list.id}`}
                  className="button"
                >
                  {list.name}
                </button>
              </div>
            );
          })}
        </div>
        <div className="skl_list">
          <h2>SKLL</h2>
          <div className="list">
            {skill.map((list, i) => {
              return (
                <div key={i} className="list_base">
                  {list.menu.map((hand, i) => (
                    <div key={i} className="list_map">
                      {getid === `${list.id}` && (
                        <div className="list_item">
                          <div className="title">
                            <p>{hand.first}</p>
                            <p>0{hand.no}</p>
                          </div>
                          <span>{hand.second}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
