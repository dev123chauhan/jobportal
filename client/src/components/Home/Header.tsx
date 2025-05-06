import React, { useState, useEffect } from "react";
import { Search, Menu, X, BriefcaseBusiness } from "lucide-react";
import bannerImage from "../../assets/job-portal.jpg";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    navigate("/auth");
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto py-4 max-w-7xl">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button
                className={`md:hidden mr-2 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="w-8 h-8" />
              </button>
              <Link to="/" className="flex items-center gap-2">
                <div className="hidden md:block">
                  <BriefcaseBusiness size={30} />
                </div>
                <span className="hidden md:block font-bold text-lg">
                  Job portal
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/job">Find Jobs</Link>
                <Link to="/profile">News</Link>
              </div>
              <button
                onClick={handleClick}
                className={`px-4 py-2 rounded transition duration-300 ${
                  isScrolled ? "button text-white" : "bg-white textColor"
                }`}
              >
                Login
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div className="relative btn text-white overflow-hidden hero">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImage}
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Content */}
        <div className="relative z-10  mx-auto  py-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore open career.
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">opportunities</h1>
          <p className="text-lg md:text-xl mb-6">
            We commit to exceptional company culture and outstanding benefits
          </p>

          <div className="flex flex-col md:flex-row mb-4">
            <input
              type="text"
              placeholder="Find the job that best suits you."
              className="flex-grow p-3 rounded-t md:rounded-l md:rounded-t-none text-gray-900 mb-2 md:mb-0"
            />
            <select className="p-3 bg-white text-gray-900 md:border-l mb-2 md:mb-0">
              <option>Philippines</option>
            </select>
            <button className="button p-3 rounded-b md:rounded-r md:rounded-b-none transition duration-300">
              <Search className="w-6 h-6 mx-auto text-white" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="button w-full md:w-auto px-6 py-3 rounded flex items-center justify-center text-white transition duration-300">
              Discover Recent News
              <span className="ml-2">→</span>
            </button>
            <button className="button w-full md:w-auto px-6 py-3 rounded flex items-center justify-center text-white transition duration-300">
              Know our process
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
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
            <Link to="/job" className="text-black hover:text-green-500">
              Find Jobs
            </Link>
            <Link to="/profile" className="text-black hover:text-green-500">
              News
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
