import React from 'react';
import { ArrowRight } from 'lucide-react';
import customerservice from "../../assets/customerservice.jpg"
import fullstackdeveloper from "../../assets/fullstackdeveloper.jpg"
import hrdirector from "../../assets/hr director.jpg"
interface Job {
  title: string;
  company: string;
  location: string;
  type: string;
  imageUrl: string;
}

const jobs: Job[] = [
  { 
    title: 'Customer Service', 
    company: 'ABC Corp', 
    location: 'New York', 
    type: 'Full-time',
    imageUrl: customerservice
  },
  { 
    title: 'Full-Stack Developer', 
    company: 'Tech Solutions', 
    location: 'San Francisco', 
    type: 'Full-time',
    imageUrl: fullstackdeveloper
  },
  { 
    title: 'HR Director', 
    company: 'Global Industries', 
    location: 'London', 
    type: 'Full-time',
    imageUrl: hrdirector
  },
];

const JobCard: React.FC<Job> = ({ title, company, location, type, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{company}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{location}</span>
        <span>{type}</span>
      </div>
      <button className="mt-4 w-full button  text-white px-4 py-2 rounded  transition-colors">
        Apply Now
      </button>
    </div>
  </div>
);

const Feature: React.FC = () => (
  <div className="max-w-7xl mx-auto  py-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">Latest featured jobs</h2>
      <a href="#" className="text-black hover:underline flex items-center">
        Explore more <ArrowRight className="ml-1" size={16} />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  </div>
);

export default Feature;