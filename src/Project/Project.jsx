import React from 'react'
import { FaFolderOpen } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";



export default function Project() {

    const Project = [
      {
       img   : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-WddXY2PVQXoNPID8iSVXR1ydyr45ATtW-p8VSFIhxs8Y7neaX5o0P4&s=10',
       title : 'Expense Tracker',
       subtit: 'Full Stack',
       intro : 'A full stack expense tracking application to add income/expenses, categorize and visualize spending with charts.', 
       demo  : 'Live Demo',
       github: 'GitHub',
      }
    ]



  return (
    <div className='mt-5 ml-3 pl-5 p-2 border-2 border-gray-800 rounded-md w-255'>
      <div className='flex items-center justify-between'>
      <div className='flex items-center gap-5'>
        <div><FaFolderOpen color='blue' size={30}/></div>
        <div>Featured Projects</div>
      </div>
      <div className='flex items-center gap-2 text-purple-800'>View All Projects <span><FaLongArrowAltRight /></span></div>
      </div>  

      <div className='bg-red-500'>
        {Project.map((Key, index) => (
            
            <div className="flex items-center mt-3 gap-2 border-2 border-gray-700 rounded-md p-2 ">{Key.index}
            
              <div ><img src={Key.img} alt="Expense Tracker" width={200} className='object-cover aspect-square rounded-md'/></div>
              
            </div>
            
          ))}
      </div>
    </div>
  )
}
