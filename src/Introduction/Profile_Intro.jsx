import React from 'react'
import { Dot, MapPin, Phone, Mail, ArrowDownToLine } from 'lucide-react'
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import About from './About';
import Project from '../Project/Project';

export default function Profile_Intro() {

    const contact = [
        {
            icon: <MapPin size={18} />,
            title: "Delhi, India |",
        },
        {
            icon: <Mail size={18} />,
            title: "ravinabisht2003@gmail.com |",
        },
        {
            icon: <Phone size={18} />,
            title: "9354444031",
        },

    ]

    const socialMedia = [
        {
            icon: <ArrowDownToLine />,
            title: "View Resume",
        },
        {
            icon: <FaGithubSquare />,
            title: "GitHub",
        },
        {
            icon: <FaLinkedin />,
            title: "Linkedin",
        },
        {
            icon: <Mail size={18} />,
            title: "Email",
        },

    ]

    return (
        <div className='w-300 flex flex-col pl-2 pr-2'>

            <div className='text-green-300 flex font-bold items-center fixed right-0  border-2 text-xs  border-green-500 rounded-md pr-2 '> <Dot size={25} /> Available for internship</div>

            <div className='mt-5 flex gap-10'>
                <div >
                    <img className='rounded-full object-contain w-50 h-50' src="https://img.joomcdn.net/ad91defa296fbdeb1ba5b50b8d7214f20e5eba2d_original.jpeg" alt="" />
                </div>
                <div className='p-2'>
                    <div className='text-xl'>Hi, I'm</div>
                    <div className='text-3xl font-bold'>Ravina Bisht</div>
                    <div className='mt-3 mb-1 flex text-xl'>
                        <div className='text-purple-600'>MCA Student |</div>
                        <div className='text-blue-600'> Aspiring Software Developer</div>
                    </div>
                    <div className='text-gray-300 text-sm'>
                        Passionate about building efficient, user-friendly web applications <br />
                        and solving real-world problem through code.
                    </div>
                    <div className='flex'>

                        {contact.map((key, index) =>
                            <div key={index} className='flex mt-2 text-sm items-center'>
                                <div >{key.icon}</div>
                                <div className='ml-1 mr-2'>{key.title}</div>
                            </div>

                        )}
                    </div>

                    <div className="flex gap-3 mt-5">
                        {socialMedia.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg   cursor-pointer transition ${index === 0
                                        ? "bg-blue-600  hover:bg-white hover:text-black"
                                        : " text-white hover:bg-purple-500"
                                    }`}
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <About/>
            </div>
            <div><Project/></div>
        </div>
    );
}