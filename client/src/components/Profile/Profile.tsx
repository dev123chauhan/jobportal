import React, { useState } from 'react';
import { Briefcase, Book, Award, Edit, Plus, Trash2, MapPin, Mail, Phone, Globe, Linkedin } from 'lucide-react';
import profileImage from "../../assets/profileimage.png"
interface Skill {
  id: number;
  name: string;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  location?: string;
  description?: string;
  duration: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

interface ProfileData {
  name: string;
  title: string;
  location: string;
  about: string;
  email: string;
  phone: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

const Profile: React.FC = () => {
  // Profile data
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "John Doe",
    title: "Senior Software Developer",
    location: "San Francisco, CA",
    about: "Passionate software developer with 5+ years of experience in web development and UI/UX design.",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    website: "johndoe.dev",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe"
  });
  
  // Skills state
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: 'React' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'Tailwind CSS' },
    { id: 4, name: 'Node.js' },
    { id: 5, name: 'GraphQL' }
  ]);
  const [newSkill, setNewSkill] = useState('');

  // Experience state
  const [experiences, setExperiences] = useState<Experience[]>([
    { 
      id: 1, 
      title: 'Senior Developer', 
      company: 'Tech Co', 
      location: 'San Francisco, CA',
      description: 'Led a team of 5 developers building modern web applications using React and Node.js.',
      duration: '2020 - Present' 
    },
    { 
      id: 2, 
      title: 'Junior Developer', 
      company: 'Startup Inc', 
      location: 'San Jose, CA',
      description: 'Developed and maintained front-end features for client applications.',
      duration: '2018 - 2020' 
    },
  ]);
  const [newExperience, setNewExperience] = useState<Omit<Experience, 'id'>>({
    title: '',
    company: '',
    location: '',
    description: '',
    duration: ''
  });
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  // Education state
  const [education, setEducation] = useState<Education[]>([
    { 
      id: 1, 
      degree: 'BSc Computer Science', 
      institution: 'University of Technology', 
      year: '2018',
      description: 'Graduated with honors. Specialized in software engineering and data structures.'
    },
  ]);
  const [newEducation, setNewEducation] = useState<Omit<Education, 'id'>>({
    degree: '',
    institution: '',
    year: '',
    description: ''
  });
  const [showEducationForm, setShowEducationForm] = useState(false);
  
  // Profile edit state
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editProfileData, setEditProfileData] = useState<ProfileData>(profileData);

  // Profile image
  // const [profileImage] = useState('/api/placeholder/150/150');
  // const [coverImage] = useState('/api/placeholder/1200/300');
  // const [profileImage, setProfileImage] = useState('/api/placeholder/150/150');
  // const [coverImage, setCoverImage] = useState('/api/placeholder/1200/300');
  
  // Handlers for skills
  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, { id: Date.now(), name: newSkill.trim() }]);
      setNewSkill('');
    }
  };

  const removeSkill = (id: number) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  // Handlers for experience
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const addExperience = () => {
    if (newExperience.title.trim() !== '' && newExperience.company.trim() !== '') {
      setExperiences([...experiences, { ...newExperience, id: Date.now() }]);
      setNewExperience({
        title: '',
        company: '',
        location: '',
        description: '',
        duration: ''
      });
      setShowExperienceForm(false);
    }
  };

  const removeExperience = (id: number) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  // Handlers for education
  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  };

  const addEducation = () => {
    if (newEducation.degree.trim() !== '' && newEducation.institution.trim() !== '') {
      setEducation([...education, { ...newEducation, id: Date.now() }]);
      setNewEducation({
        degree: '',
        institution: '',
        year: '',
        description: ''
      });
      setShowEducationForm(false);
    }
  };

  const removeEducation = (id: number) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  // Handlers for profile edit
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditProfileData({ ...editProfileData, [name]: value });
  };

  const saveProfileChanges = () => {
    setProfileData(editProfileData);
    setIsEditingProfile(false);
  };

  return (

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative">
          <div className="h-48 sm:h-64 bg-gradient-to-r btn">
            <img 
              // src={coverImage} 
              // alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto">
          <div className="flex items-end">
            <div className="border-4 border-white rounded-full shadow-lg">
              <img
                src={profileImage}
                // alt="Profile"
                className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover"
              />
            </div>
          </div>
     

        {/* Profile Info */}
        {/* <div className="pt-20 sm:pt-24 pb-8  sm:px-4"> */}
        <div className="pb-8  sm:px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{profileData.name}</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{profileData.title}</p>
              <p className="text-sm text-gray-600 mt-1 flex items-center">
                <MapPin size={16} className="mr-1" /> {profileData.location}
              </p>
            </div>
            <button 
              onClick={() => setIsEditingProfile(true)}
              className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white btn"
            >
              <Edit size={16} className="mr-2" />
              Edit Profile
            </button>
          </div>

          {/* Contact information */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <Mail size={16} className="mr-2" />
              <span>{profileData.email}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Phone size={16} className="mr-2" />
              <span>{profileData.phone}</span>
            </div>
            {profileData.website && (
              <div className="flex items-center text-sm text-gray-600">
                <Globe size={16} className="mr-2" />
                <span>{profileData.website}</span>
              </div>
            )}
            {profileData.github && (
              <div className="flex items-center text-sm text-gray-600">
                {/* <GitHub size={16} className="mr-2" /> */}
                <span>{profileData.github}</span>
              </div>
            )}
            {profileData.linkedin && (
              <div className="flex items-center text-sm text-gray-600">
                <Linkedin size={16} className="mr-2" />
                <span>{profileData.linkedin}</span>
              </div>
            )}
          </div>

          {/* About section */}
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">About</h2>
            <p className="mt-2 text-gray-600">{profileData.about}</p>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isEditingProfile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={editProfileData.name}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={editProfileData.title}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={editProfileData.location}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">About</label>
                    <textarea
                      name="about"
                      rows={3}
                      value={editProfileData.about}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editProfileData.email}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={editProfileData.phone}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Website</label>
                    <input
                      type="text"
                      name="website"
                      value={editProfileData.website}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">GitHub</label>
                    <input
                      type="text"
                      name="github"
                      value={editProfileData.github}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                    <input
                      type="text"
                      name="linkedin"
                      value={editProfileData.linkedin}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <button
                    onClick={() => setIsEditingProfile(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveProfileChanges}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white btn"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sections */}
        <div className="border-t border-gray-200 px-2 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-gray-900 flex items-center">
                <Award className="mr-2" size={20} />
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 textColor"
                  >
                    {skill.name}
                    <button 
                      onClick={() => removeSkill(skill.id)}
                      className="ml-2 textColor"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex mt-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  placeholder="Add a skill"
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1"
                />
                <button
                  onClick={addSkill}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white btn"
                >
                  <Plus size={16} className="mr-2" />
                  Add
                </button>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium text-gray-900 flex items-center">
                  <Briefcase className="mr-2" size={20} />
                  Experience
                </h2>
                <button
                  onClick={() => setShowExperienceForm(!showExperienceForm)}
                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white btn"
                >
                  <Plus size={16} className="mr-1" />
                  Add
                </button>
              </div>
              
              {showExperienceForm && (
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h3 className="text-md font-medium mb-3">Add New Experience</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Job Title</label>
                      <input
                        type="text"
                        name="title"
                        value={newExperience.title}
                        onChange={handleExperienceChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={newExperience.company}
                        onChange={handleExperienceChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={newExperience.location}
                        onChange={handleExperienceChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Duration</label>
                      <input
                        type="text"
                        name="duration"
                        value={newExperience.duration}
                        onChange={handleExperienceChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        name="description"
                        rows={3}
                        value={newExperience.description}
                        onChange={handleExperienceChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setShowExperienceForm(false)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={addExperience}
                        className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white btn focus:outline-none"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0 relative group">
                    <button 
                      onClick={() => removeExperience(exp.id)} 
                      className="absolute top-0 right-0 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                    <h3 className="text-md font-medium text-gray-900">{exp.title}</h3>
                    <p className="text-sm text-gray-600">{exp.company}{exp.location ? ` • ${exp.location}` : ''}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                    {exp.description && <p className="text-sm text-gray-600 mt-2">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4 lg:col-span-2 px-2">
              <div className="flex justify-between items-center ">
                <h2 className="text-xl font-medium text-gray-900 flex items-center">
                  <Book className="mr-2" size={20} />
                  Education
                </h2>
                <button
                  onClick={() => setShowEducationForm(!showEducationForm)}
                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white btn focus:outline-none"
                >
                  <Plus size={16} className="mr-1" />
                  Add
                </button>
              </div>
              
              {showEducationForm && (
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h3 className="text-md font-medium mb-3">Add New Education</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Degree</label>
                      <input
                        type="text"
                        name="degree"
                        value={newEducation.degree}
                        onChange={handleEducationChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Institution</label>
                      <input
                        type="text"
                        name="institution"
                        value={newEducation.institution}
                        onChange={handleEducationChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Year</label>
                      <input
                        type="text"
                        name="year"
                        value={newEducation.year}
                        onChange={handleEducationChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        name="description"
                        rows={3}
                        value={newEducation.description}
                        onChange={handleEducationChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setShowEducationForm(false)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={addEducation}
                        className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white btn focus:outline-none"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((edu) => (
                  <div key={edu.id} className="border border-gray-200 rounded-md p-4 relative group">
                    <button 
                      onClick={() => removeEducation(edu.id)} 
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                    <h3 className="text-md font-medium text-gray-900">{edu.degree}</h3>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                    {edu.description && <p className="text-sm text-gray-600 mt-2">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;