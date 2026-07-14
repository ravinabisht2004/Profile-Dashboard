import {House,Users,LayoutDashboard,GraduationCap,FolderBookmark,Mail, ArrowDownToLine} from 'lucide-react'
import Contact from './Contact'

export default function Navbar() {
  const navabarIcon = [
    {
      icon  : <House />,
      title : "Home",
  }, 
   {
      icon  : <Users />,
      title : "About",
  }, 
   {
      icon  : <LayoutDashboard />,
      title : "Skills",
  }, 
   {
      icon  : <GraduationCap />,
      title : "Education",
  }, 
  {
      icon  : <FolderBookmark />,
      title : "Project",
  }, 
  {
      icon  : <Mail />,
      title : "Contact",
  }, 
 
  ]

  return (
    
    <div>
      <div className="flex items-center">
        <h1 className="text-white text-2xl font-bold  bg-gradient-to-r from-blue-700 to-purple-800 p-2 rounded-xl mr-3">RB</h1>
        <div className="flex flex-col  text-white">
            <span className="font-semibold">Ravina Bisht</span>
            <span className=" text-sm font-semibold text-blue-500">Developer Portfolio</span>
        </div>
      </div>

     <div className='text-white mt-9'>
      {navabarIcon.map((key,index)=>
        <div key={index} className='flex p-2 mt-4 w-40 gap-5 cursor-pointer hover:bg-blue-800 rounded-xs duration-300  hover:translate-x-2 '>
          <div>{key.icon}</div>
          <div>{key.title}</div>
        </div>
      )}
     </div>

     <button className='mt-20 p-2 text-purple-800 flex gap-5 border-2 border-b-fuchsia-700 rounded-xl hover:bg-purple-950 hover:text-white'><span><ArrowDownToLine /></span><span>Download Resume</span></button>

      <div>
        <Contact/>
      </div>
    </div>
  )
}
