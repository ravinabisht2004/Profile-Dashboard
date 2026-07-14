import './App.css'
import Profile_Intro from './Introduction/Profile_Intro'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className='bg-black font-serif h-screen p-5 text-white flex gap-20'>
    <Navbar/>
    <Profile_Intro/>
    </div>
   
  )
}

export default App
