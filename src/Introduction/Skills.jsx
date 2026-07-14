import React from "react";
import { ChevronsLeftRight, icons } from "lucide-react";
import { IoLogoHtml5 } from "react-icons/io5";

export default function Skills() {
    const Skills = [
        {icon : <IoLogoHtml5 />,
          title: 'HTML',  
        },

    ]

  return (
    <div className="p-3 border-2 border-purple-500 w-fit h-80 rounded-2xl">
      <div className="flex items-center gap-2">
        <div>
          <ChevronsLeftRight color="purple" size={30} />
        </div>
        <div>Skills</div>
      </div>
    </div>
  );
}
