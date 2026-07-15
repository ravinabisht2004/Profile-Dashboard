import React from 'react'
import { FaFolderOpen } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";



export default function Project() {
  return (
    <div className='mt-5 ml-3 pl-5 p-2 border-2 border-gray-800 rounded-md w-245'>
      <div className='flex items-center justify-between'>
      <div className='flex items-center gap-5'>
        <div><FaFolderOpen color='blue' size={30}/></div>
        <div>Featured Projects</div>
      </div>
      <div className='flex items-center gap-2 text-purple-800'>View All Projects <span><FaLongArrowAltRight /></span></div>
      </div>  
    </div>
  )
}
