import React, {  useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ChevronDown,
  Mail,
  Rocket,
} from "lucide-react";
import linear from "../../assets/linear.png";
import notion from "../../assets/notion.png";
import spline from "../../assets/splinelogo.jpg";
import raycast from "../../assets/raycastlogo.png";
import loom from "../../assets/loom.png";
import trainline from "../../assets/trainline.png";
import { useNavigate } from "react-router-dom";
import JobFilter from "./JobFilter";
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
  logo: string;
}

const jobs: Job[] = [
  {
    id: 1,
    company: "Linear company",
    title: "Software Engineer",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    postedDate: "2d ago",
    logo: linear,
  },
  {
    id: 2,
    title: "Junior UI Designer",
    company: "Notion",
    location: "New York, NY",
    salary: "$70k - $90k",
    type: "Full-time",
    postedDate: "1d ago",
    logo: notion,
  },
  {
    id: 3,
    title: "Technical Support Engineer",
    company: "Spline studio",
    location: "New York, NY",
    salary: "$70k - $90k",
    type: "Full-time",
    postedDate: "1d ago",
    logo: spline,
  },
  {
    id: 4,
    title: "Product Designer",
    company: "Raycast corp",
    location: "New York, NY",
    salary: "$70k - $90k",
    type: "Full-time",
    postedDate: "1d ago",
    logo: raycast,
  },
  {
    id: 5,
    title: "Copywriter (Growth)",
    company: "Loom",
    location: "London",
    salary: "$38k - $40k",
    type: "Full-time",
    postedDate: "3d ago",
    logo: loom,
  },
  {
    id: 6,
    title: "Senior UX/UI Designer",
    company: "Trainline group",
    location: "Paris",
    salary: "$38k - $40k",
    type: "Full-time",
    postedDate: "4d ago",
    logo: trainline,
  },
  // Add more job listings as needed
];

const Job: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/jobdetail");
  };


  return (
    <div className="max-w-7xl mx-auto  py-8 mt-20">
      <h1 className="text-5xl font-semibold mb-2">
        Find your <span className="textColor">new job</span> today
      </h1>
      <p className="text-gray-600 mb-6">
        Thousands of jobs in the computer, engineering, and technology sectors
        are waiting for you.
      </p>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-grow relative">
          <MapPin
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="button text-white px-6 py-2 rounded-md btn">
          Search Job
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <JobFilter />

        {/* Job Listings */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">3177 Jobs</h2>
            <button className="flex items-center text-gray-600">
              Sort by <ChevronDown size={20} className="ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                onClick={handleClick}
                key={job.id}
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded mr-4"
                  />
                  <div className="flex-grow">
                    <p className="text-gray-600">{job.company}</p>
                    <h3 className="font-semibold text-xl">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-500">
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {job.salary}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {job.postedDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-80 space-y-4 bg-white p-3 rounded-lg emailBox shadow-sm border transition-shadow cursor-pointer">
          <div className="p-3 rounded-lg mb-10">
            <div className="flex items-center gap-3">
              <Mail />
              <h3 className="font-semibold  text-2xl"> Email me for jobs</h3>
            </div>
            <p className="text-md text-gray-600 mb-4">
              Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat
              commodo ea foes.
            </p>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="w-full px-3 py-2 border rounded-md mb-2"
            />
            <button className="w-full button text-white px-4 py-2 rounded-md transition-colors">
              Subscribe
            </button>
          </div>
          {/* Add more sidebar components if needed */}


          {/* Get noticed faster box */}

          <div className="w-full lg:w-80  space-y-4 bg-white p-3 rounded-lg  shadow-sm border transition-shadow cursor-pointer">
          <div className="p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <Rocket />
              <h3 className="font-semibold text-2xl">Get noticed faster</h3>
            </div>
            <p className="text-md text-gray-600 mb-4">
              Make a bigger impression and stand out to employers looking for
              candidates like you.
            </p>
            <button className="w-full button text-white px-4 py-2 rounded-md transition-colors">
              Upload your resume
            </button>
          </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Job;
