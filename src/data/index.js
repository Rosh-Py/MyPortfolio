const navLinks = ["About", "Skills", "Projects"];
const name = "Roshan Jha";
const profession = "Full Stack Web Developer";
const userGithub = "https://github.com/Rosh-Py";
const userLinkedIn = "https://www.linkedin.com/in/roshanjha01";
const userTwitter = "";
const skills = [
  { category: "Frontend", skills: "HTML5, CSS3, React.js" },
  {
    category: "Backend",
    skills: "Node.js, MongoDB, Mongoose, Express, Oracle SQL",
  },
  { category: "Languages", skills: "Javascript, Python, PL/SQL" },
];
const heroImg =
  "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
const aboutText = `
Hey There! Glad you are here.
I am Roshan, a full stack web developer from India.
I've worked on technologies like PL/SQL (Yep! No secrets.😊), Oracle SQL and here comes my favorites😍 HTML5, CSS3, Javascript, React.js, Node.js, MongoDB with Mongoose and a little bit of Python too.
That's all my Lord!
`;
const aboutImg =
  "https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const pageTitle = "</Roshan>";
const typeSpeed = 100; //in ms

const projects = [
  {
    img: "https://ik.imagekit.io/jwn9hql2way/ComfySloth_NF7043F_P.PNG",
    title: "ComfySloth",
    description:
      "A furniture e-commerce website designed using React.js (using reducer hook and context API to manage state effectively) and styled components with route protection using Auth0.",
    skills: "React.js, Styled Components",
    github: "https://github.com/Rosh-Py/react-comfy-sloth",
    live: "https://rosh-react-comfy-sloth.netlify.app/products",
  },
  {
    img: "https://ik.imagekit.io/jwn9hql2way/DevcamperAPI_2uHfgWDqd.png",
    title: "Devcamper API",
    description:
      "Mastering the API building by developing this API for a Bootcamp website where bootcamps can be created/updated (Roles based)/deleted/fetched(advanced querying supported). Login/password reset supported",
    skills: "Node.js,Express.js, MongoDB, Mongoose",
    github: "https://github.com/Rosh-Py/Devcamper-api",
    live: "https://documenter.getpostman.com/view/15037808/TzeTJV3n",
  },
  {
    img: "https://ik.imagekit.io/jwn9hql2way/Qkart_ny4W9yzpK.PNG",
    title: "QKart",
    description:
      "A Crio project! Front to back, designed to demonstrate the basic e-commerce with register and login functionalities, secured by backend using authorization and route protection.",
    skills: "Node.js,Express.js, MongoDB, Mongoose, React.js, Ant Design",
    github: "",
    live: "https://rosh-qkart-backend.netlify.app",
  },
  {
    img: "https://ik.imagekit.io/jwn9hql2way/XFlix_0u3MmjnVp.PNG",
    title: "XFlix",
    description:
      "A Crio buildout! A Video sharing platform, where youtube embed links can be uploaded for sharing. Videos can be watched, liked and disliked as well.",
    skills: "Node.js, Express.js, React.js, MongoDB, Mongoose",
    github: "",
    live: "https://rosh-xflix-react-node.netlify.app/",
  },
  {
    img: "https://ik.imagekit.io/jwn9hql2way/QTrip_Dynamic_8izopA2GP.PNG",
    title: "QTrip",
    description:
      "A Crio project! The role was to implement responsive frontend for Trip planning website, where user can explore the locations and make reservations.",
    skills: "HTML, CSS, Bootstrap, Javascript",
    github: "",
    live: "https://rosh-qtrip-dynamic.netlify.app/",
  },
  {
    img: "https://ik.imagekit.io/jwn9hql2way/Backroads_ObHlmnExJ.PNG",
    title: "BackRoads",
    description:
      "A Static tour explore website made using HTML and CSS only without using third party libraries. It's using CSS flexbox for the layouts.",
    skills: "HTML, CSS, Javascript",
    github: "https://github.com/Rosh-Py/Backroads-tour-company",
    live: "https://rosh-backroads-tour-company.netlify.app/",
  },
  {
    img: "https://ik.imagekit.io/jwn9hql2way/Tea-station_440ydJxqU.PNG",
    title: "Tea-Station",
    description:
      "A Static website for Tea Station made using HTML and CSS only without using third party libraries. It's using CSS floats for the layouts.",
    skills: "HTML, CSS, Javascript",
    github: "https://github.com/Rosh-Py/WebDev-TeaStation",
    live: "https://rosh-tea-station.netlify.app/",
  },
];

export {
  navLinks,
  skills,
  aboutText,
  aboutImg,
  pageTitle,
  typeSpeed,
  name,
  profession,
  heroImg,
  projects,
  userGithub,
  userTwitter,
  userLinkedIn,
};
