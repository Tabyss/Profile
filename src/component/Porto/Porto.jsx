import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import "./porto.scss";
import { slide } from "../../assets/img/porto";

function Porto() {
  return (
    <div className="porto">
      <div className="porto-base">
        <div className="porto-base-title">
          <h2>Collection</h2>
        </div>
        <div className="porto-base-caption">
          <button>
            <AiOutlineArrowRight />
          </button>
          <p>
            I'm not only make projects like the styles used, I can do more than
            that. Sweet, cute, elegant, formal, gothic of course I can fit all
            the styles. So, check All my random creative stuff.
          </p>
        </div>
      </div>
      <div className="porto-load">
        {slide.map((porto) => {
          return (
            <div key={porto.id} className={"porto-load-card" + porto.id}>
              <img src={porto.image} className="porto-load-card-image" />
              <div className="porto-load-card-caption">
                <p>{porto.title}</p>
                <p>{porto.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Porto