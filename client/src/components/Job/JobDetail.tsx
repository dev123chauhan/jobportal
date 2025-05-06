import React, { useState } from 'react';
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign, Calendar, Building,  Bookmark, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import linear from "../../assets/linear.png"
import JobApplication from './JobApplication';
interface JobDetail {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  postedDate: string;
  applicationDeadline: string;
  companySize: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const jobDetail: JobDetail = {
  id: 1,
  title: 'Senior Software Engineer',
  company: 'Linear Company',
  logo: linear,
  location: 'San Francisco, CA (Remote)',
  salary: '$120k - $160k',
  type: 'Full-time',
  experience: '5+ years',
  postedDate: '2 days ago',
  applicationDeadline: 'April 30, 2024',
  companySize: '500-1000 employees',
  description: 'We are seeking a talented Senior Software Engineer to join our innovative team...',
  responsibilities: [
    'Design and implement scalable software solutions',
    'Collaborate with cross-functional teams to define and develop new features',
    'Mentor junior developers and conduct code reviews',
    'Optimize application performance and improve code quality'
  ],
  requirements: [
    'Bachelors degree in Computer Science or related field',
    'strong proficiency in Python and JavaScript',
    'Experience with cloud platforms (AWS, Azure, or GCP)',
    'Excellent problem-solving and communication skills'
  ],
  benefits: [
    'Competitive salary and equity package',
    'Health, dental, and vision insurance',
    'Flexible working hours and remote work options',
    'Professional development budget'
  ]
};

const JobDetail: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className="max-w-7xl mx-auto  py-8">
      <Link to="/job" className="inline-flex items-center textColor hover:underline mb-6">
        <ArrowLeft className="mr-2" size={20} />
        Back to job listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-4">
              <img src={jobDetail.logo} alt={jobDetail.company} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h1 className="text-2xl font-bold">{jobDetail.title}</h1>
                <p className="text-gray-600">{jobDetail.company}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin size={20} className="mr-2" />
                {jobDetail.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Briefcase size={20} className="mr-2" />
                {jobDetail.type}
              </div>
              <div className="flex items-center text-gray-600">
                <DollarSign size={20} className="mr-2" />
                {jobDetail.salary}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock size={20} className="mr-2" />
                {jobDetail.experience}
              </div>
            </div>
            <p className="text-gray-700 mb-6">{jobDetail.description}</p>
            <button   onClick={openPopup} className="w-full button text-white py-2 px-4 rounded-md  transition-colors">
              Apply Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              {jobDetail.responsibilities.map((resp, index) => (
                <li key={index} className="text-gray-700">{resp}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc pl-5 space-y-2">
              {jobDetail.requirements.map((req, index) => (
                <li key={index} className="text-gray-700">{req}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc pl-5 space-y-2">
              {jobDetail.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Posted Date</p>
                  <p className="font-medium">{jobDetail.postedDate}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-3 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Application Deadline</p>
                  <p className="font-medium">{jobDetail.applicationDeadline}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="w-6 h-6 mr-3 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Company Size</p>
                  <p className="font-medium">{jobDetail.companySize}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Company Information</h2>
            <div className="flex items-center mb-4">
              <img src={jobDetail.logo} alt={jobDetail.company} className="w-12 h-12 rounded-full mr-3" />
              <div>
                <p className="font-medium">{jobDetail.company}</p>
                <Link to="#" className="textColor hover:underline text-sm">View company profile</Link>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              TechCorp is a leading technology company specializing in innovative software solutions...
            </p>
            <Link to="#" className="textColor hover:underline">
              {jobDetail.companySize}
            </Link>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-white textColor borderColor py-2 px-4 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center">
              <Bookmark size={20} className="mr-2" />
              Save Job
            </button>
            <button className="flex-1 bg-white textColor borderColor py-2 px-4 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center">
              <Share2 size={20} className="mr-2" />
              Share Job
            </button>
          </div>
        </div>
      </div>

      <JobApplication   isOpen={isPopupOpen} 
        onClose={closePopup} 
        jobTitle={jobDetail.title} />
    </div>
  );
};

export default JobDetail;