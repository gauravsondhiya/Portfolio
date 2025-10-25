
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import project1 from './assets/project1.png'


export let projectarr = [
  {
   logo:project1,
   title:"पुस्तक AI",
   description:"Upload sources and पुस्तक AI will summarize them and make interesting connections between topics",
   stack:["LangChain","ReactJS" ,"Quadrant", "Mongodb","ExpressJS","Acternity","ShadCN", "Mongodb","ExpressJS","Acternity",],
   gitlink:"https://github.com/gauravsondhiya/Pustak_AI",
   livelink:"https://pustakai-rho.vercel.app/"
},
  {
   logo:project1,
   title:"Artify AI",
   description:"Upload sources and पुस्तक AI will summarize them and make interesting connections between topics",
   stack:["ReactJS" ,"Quadrant", "Mongodb","ExpressJS","Acternity","ShadCN"],
   gitlink:"https://github.com/gauravsondhiya/Pustak_AI",
   livelink:"https://pustakai-rho.vercel.app/"
},
  {
   logo:project1,
   title:"पुस्तक AI",
   description:"Upload sources and पुस्तक AI will summarize them and make interesting connections between topics",
   stack:["ReactJS" ,"Quadrant", "Mongodb","ExpressJS","Acternity","ShadCN"],
   gitlink:"https://github.com/gauravsondhiya/Pustak_AI",
   livelink:"https://pustakai-rho.vercel.app/"
},

];
export let skilldata= [
  "TypeScript","Javascript","Python",
  "Next JS","React JS","Tailwind","HTML/CSS",
  "Express JS","Node JS","Zest", "Prisma", "ORM","RestAPI",
  'MySQL',"PostgreSQL","MongoDB",
  "Langchain","Vector DB","Agent SDK","RAG","Prompt",
  'AWS',"Docker","CI/CD"
]

// [
//   {type:"Language",stack:["TypeScript","Javascript","Python"]},
//   {type:"Frontend",stack:["Next JS","React JS","Tailwind CSS","HTML/CSS"]},
//   {type:"Backend",stack:["Express JS","Node JS","Zest", "Prisma", "ORM","RestAPI"]},
//   {type:"Database",stack:['MySQL',"PostgreSQL","MongoDB"]},
//   {type:"Gen AI",stack:["Langchain","Vector DB","Agent SDK","RAG","Prompt"]},
//   {type:"Devops",stack:['AWS',"Docker","CI/CD"]}
// ]

export let navbardata = [
    { type: "Github", link: "https://github.com/gauravsondhiya" },
    { type: "linkedin", link: "https://www.linkedin.com/in/gaurav-sondhiya/" },
    { type: "X", link: "https://x.com/sondhiya__ji" },
    { type: "Contact", link: "mailto:gauravsondhiya1503@gmail.com" },
    { type: "Resume", link: "drivelink" },
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
