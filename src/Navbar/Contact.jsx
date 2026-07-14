import React from 'react'
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaLinkedin  } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";


 export default function Contact() {
    const contact=[
        {
            icon:<FaGithubSquare />,
        }, 
         {
            icon:<FaLinkedin />,
        }, 
          {
             icon:<MdEmail/>,
         }, 
         {
            icon:<FaWhatsapp/>,
        },
    ]
  return (

    
    
    <div className='text-white p-2 mt-5'>
      <div className='text-xl mb-2'>Let's Connect</div>
        <div className='flex  gap-3 '>
            {contact.map((key,index) =>
            <span key={index} className= 'text-white text-2xl border-2 p-1 rounded-md' >{key.icon}</span>
      )}
      </div>

      

      
    </div>
  )
}
