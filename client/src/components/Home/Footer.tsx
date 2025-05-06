import React from "react";
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={30} /> Job Portal
            </div>
            <p className="text-sm mb-4">Your Gateway to IT Opportunities</p>
            <p className="text-sm mb-4">
              Technology Hub <br /> Connecting Talented Professionals <br /> to
              Innovative Companies.
            </p>
            <div className="flex space-x-4">
              <Twitter
                size={20}
                className="hover:text-green-500 cursor-pointer"
              />
              <Facebook
                size={20}
                className="hover:text-green-500 cursor-pointer"
              />
              <Linkedin
                size={20}
                className="hover:text-green-500 cursor-pointer"
              />
              <Instagram
                size={20}
                className="hover:text-green-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Jobs by Category */}
          <div>
            <h3 className="font-bold mb-4">Jobs by Category</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="">Software Development</Link>
              </li>
              <li>
                <Link to="">Web Development</Link>
              </li>
              <li>
                <Link to="">Data Science</Link>
              </li>
              <li>
                <Link to="">Cloud Computing</Link>
              </li>
              <li>
                <Link to="">DevOps</Link>
              </li>
            </ul>
          </div>

          {/* Jobs by Location */}
          <div>
            <h3 className="font-bold mb-4">Jobs by Location</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="">Remote</Link></li>
              <li><Link to="">Silicon Valley</Link></li>
              <li><Link to="">Bangalore</Link></li>
              <li><Link to="">London</Link></li>
            </ul>
          </div>

          {/* Jobs by Work Mode and Experience */}
          <div>
            <h3 className="font-bold mb-4">Jobs by Work Mode</h3>
            <ul className="text-sm space-y-2">
              <li>Remote</li>
              <li>Hybrid</li>
              <li>On-Site</li>
            </ul>
            <h3 className="font-bold mt-6 mb-4">Jobs by Experience</h3>
            <ul className="text-sm space-y-2">
              <li>Entry Level</li>
              <li>Mid-Level</li>
              <li>Senior</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-white text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Tech Job Portal</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/privacypolicy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
