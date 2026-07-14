import React from 'react'
import {User,MoveRight} from 'lucide-react'

export default function About() {
  return (
    <>
    <div className='p-2 mt-10 border-2 border-purple-500 w-fit h-80 rounded-2xl'>
      <div className='flex items-center gap-5'>
        <div><User strokeWidth={3} size={40} color='blue' /></div>
        <div className='font-bold text-2xl'>About Me</div>
      </div>
      <div className='mt-5 pl-3'>
        I am an MCA student with a strong fondation in <br/>
        computer science and a passion for web development. <br/> 
        I enjoy creating reponsive, accessible, and <br/>
        user-centric applications. I love learning new <br/>
        technologies and turning idea into real-world <br/>
        solutions.
      </div>
      <div className='flex mt-5 ml-3 rounded-md border-2 border-purple-500 w-fit p-2 gap-2 text-purple-600'>Know More About Me <span><MoveRight /></span></div>
    </div>
    </>
  )
}
