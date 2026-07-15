import React from "react";
import { ChevronsLeftRight, icons } from "lucide-react";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";




export default function Skills() {
  const Skills = [
    { icon: <IoLogoHtml5 color="orange" size={30}/>,
      title: "HTML" 
    },
    {
      icon: <FaCss3 color="Blue" size={30}/>,
      title:"CSS"
    },
    {
      icon: <FaJs  color="Yellow" size={30}/>,
      title:"JavaScript"
    },
    {
      icon: <FaReact  color="SkyBlue" size={30}/>,
      title:"React"
    },
    {
      icon: <RiTailwindCssFill  color="SkyBlue" size={30}/>,
      title:"Tailwind CSS"
    },
    {
      icon: <DiNodejs  color="green" size={30}/>,
      title:"Node JS"
    },
    {
      icon: <SiExpress   size={30}/>,
      title:"Express.js"
    },
    {
      icon: <GrMysql   size={30}/>,
      title:"My Sql"
    },



  ];

  return (
    <div className="p-3 border-2 border-purple-500 w-fit h-80 rounded-2xl">
      <div className="flex items-center gap-2 ">
        <div>
          <ChevronsLeftRight color="purple" size={30} />
        </div>
        <div>Skills</div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {Skills.map((Key, index) => (
            
            <div className="flex items-center mt-3 gap-2 ">
              <div>{Key.icon}</div>
              <div>{Key.title}</div>
            </div>
            
          ))}
        </div>
      
    </div>
  );
}
