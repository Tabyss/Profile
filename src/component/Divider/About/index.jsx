import { useEffect } from "react";
import { divider } from "../../../animation";

export default function About() {
  useEffect(() => {
    divider();
  }, []);

  return (
    <div className="divider-about">
      <div className="divider-about-title">
        <p>more</p>
        <h1>About</h1>
        <h3>me</h3>
      </div>
    </div>
  );
}
