import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import project1 from '../assets/project1.png'


export let project_data = [
  {
   logo:project1,
   title:"पुस्तक AI",
   description:"Upload sources and पुस्तक AI will summarize them and make interesting connections between topics",
   stack:["LangChain","ReactJS" ,"Quadrant", "Mongodb","ExpressJS","Acternity","ShadCN", "Mongodb","ExpressJS","Acternity",],
   gitlink:"https://github.com/gauravsondhiya/Pustak_AI",
   livelink:"https://pustakai-rho.vercel.app/"
 },
  {
   logo:"#",
   title:"SQL Agent",
   description:"Upload sources and पुस्तक AI will summarize them and make interesting connections between topics",
   stack:["ReactJS" ,"Quadrant", "Mongodb","ExpressJS","Acternity","ShadCN"],
   gitlink:"https://github.com/gauravsondhiya/Pustak_AI",
   livelink:"https://pustakai-rho.vercel.app/"
},
  

];


// export let skilldata= [
//   "TypeScript","Javascript","Python",
//   "Next JS","React JS","Tailwind",
//   "Express JS","Node JS","Zest", "Prisma", "ORM","RestAPI",
//   'MySQL',"PostgreSQL","MongoDB",
//   "Langchain","Vector DB","Agent SDK","RAG","Prompt",
//   'AWS',"Docker","CI/CD"
// ]

export let skilldata=[
  {type:"Gen AI",stack:["Langchain","Vector DB","Agent SDK","RAG","Prompt"]},
  {type:"Devops",stack:['AWS',"Docker","CI/CD"]},
  {type:"Language",stack:["TypeScript","Javascript","Python"]},
  {type:"Frontend",stack:["Next JS","React JS","Tailwind CSS","HTML/CSS"]},
  {type:"Backend",stack:["Express JS","Node JS","Zest", "Prisma", "ORM","RestAPI"]},
  {type:"Database",stack:['MySQL',"PostgreSQL","MongoDB"]},
]

export let Contact_data = [
    { type: "Github", link: "https://github.com/gauravsondhiya" },
    { type: "linkedin", link: "https://www.linkedin.com/in/gaurav-sondhiya/" },
    { type: "X", link: "https://x.com/sondhiya__ji" },
    { type: "Email", link: "mailto:gauravsondhiya1503@gmail.com" },
    { type: "Resume", link: "/resume" },
  ];

export let social = [
  {
    icon: <FaGithub />,
    url: "https://github.com/gauravsondhiya",
  },
  {
    icon: <FaTwitterSquare />,
    url: "https://x.com/sondhiya__ji",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/gaurav-sondhiya/",
  },
  {
    icon: <IoIosMail />,
    url: "mailto:gauravsondhiya1503@gmail.com",
  },
];


export let sidebar_btn_data =[
    {to:"/",btn:"Home"},
    {to:"/experience",btn:"Experience"},
    {to:"/projects",btn:"Projects"},
    {to:"/skills",btn:"Skills"},
    {to:"/education",btn:"Education"},
    {to:"/resume",btn:"Resume"},
    {to:"/contact",btn:"Contact"},
  ]


export let education_data = [
    {
      collage_name: "Gyan Ganga College of technology Jabalpur",
      Degree: "Master of Computer Application (MCA) ",
      year: "July-2024 to August-2026",
      Grade: "8.0 CGPA"
    },
    {
      collage_name: "st aloysius college jabalpur",
      Degree: "Bachelor of commerce Computer Application",
      year: "July-2018 to August-2021",
      Grade: ""
    }
  ];

export let experience_data = [
    {
      companyname: "Doa Guru Info Systems Jabalpur",
      jobtype: "Contract",
      position: "Full Stack Engineer",
      year: "Dec-2025 to Nov-2026",
      location: "Banglore",
      des: "Developed a full-stack application to optimize warehouse operations for DSI, enhancing inventory tracking and process efficiency",
    },
    {
      companyname: "Freelance",
      jobtype: "",
      position: "Full Stack Engineer",
      year: "Jan-2024 to Oct-2025",
      des: "Developed a full-stack application to optimize warehouse operations for DSI, enhancing inventory tracking and process efficiency",
    },
    {
      companyname: "Linkederp Bangalore",
      jobtype: "Full time",
      position: "Associate Software Engineer ",
      year: "Sep-2022 to Dec 2024",
      des: "Developed a full-stack application to optimize warehouse operations for DSI, enhancing inventory tracking and process efficiency",
    },
  ];