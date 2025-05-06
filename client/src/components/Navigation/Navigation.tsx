import { BriefcaseBusiness, Menu, X } from "lucide-react";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navigation: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/auth")
      }
 return(
    <>
      <div className="fixed  top-0 left-0 right-0 z-50 transition-all duration-300 bg-white text-black shadow-md">
        <div className="mx-auto  py-4 max-w-7xl">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button 
                // className={`md:hidden mr-2 ${isScrolled ? 'text-black' : 'text-white'}`}
                className="md:hidden mr-2 text-black"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="w-8 h-8" />
              </button>
              <Link to="/" className="flex items-center gap-2"><div className='hidden md:block'><BriefcaseBusiness size={30}/></div>
              <span className="hidden md:block font-bold text-lg">Job portal</span></Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/job">Find Jobs</Link>
                <Link to="/profile">News</Link>
              </div>
                   <button onClick={handleClick} className="px-4 py-2 rounded transition duration-300 btn text-white">
                
                Login
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className={`fixed top-0 left-0 w-full h-full bg-white text-black z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <button 
            className="absolute top-4 right-4 text-black" 
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center mb-8">
            <span className="font-bold text-lg text-black">Job Portal</span>
          </div>
          <div className="flex flex-col space-y-4">
            <Link to="/job" className="text-black hover:text-green-500">Find Jobs</Link>
            <Link to="/profile" className="text-black hover:text-green-500">News</Link>
          </div>
        </div>
      </div>
    </>
 )
}
export default Navigation;