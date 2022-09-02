// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: "alnawras-express",
    title: "Alnawras Express",
    category: "Web Application",
    img: require("@/assets/images/alnawras-express.png"),
  },
  {
    id: "molt",
    title: "OLT Control Panel",
    category: "Web Application",
    img: require("@/assets/images/molt.png"),
  },
  {
    id: "survehub",
    title: "Survehub",
    category: "Web Application",
    img: require("@/assets/images/survehub.png"),
  },
  {
    id: "hiring-crowd",
    title: "Hiring Crowd",
    category: "Web Application",
    img: require("@/assets/images/hiring-crowd.png"),
  },
  {
    id: "flance",
    title: "Flance",
    category: "Web Application",
    img: require("@/assets/images/flance.png"),
  },
];

export default projects;
