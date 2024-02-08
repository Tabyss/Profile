import { FaFigma, FaReact, FaSass, FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

export  const ListSkill = [
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
          second: FaReact,
        },
        {
          no: 3,
          first: "Sass",
          second: FaSass,
        },
        {
          no: 4,
          first: "HTML",
          second: FaHtml5,
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
          second: SiExpress,
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
          second: FaFigma,
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