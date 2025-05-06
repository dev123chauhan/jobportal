import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

type SectionName = 'location' | 'salary' | 'date' | 'experience' | 'employment';
type EmploymentType = 'Full-time' | 'Temporary' | 'Part-time';

const JobFilter: React.FC = () => {
  const [locationFilter, setLocationFilter] = useState<string>('Remote job');
  const [salaryFilter, setSalaryFilter] = useState<string>('Any');
  const [salaryPeriod, setSalaryPeriod] = useState<string>('Yearly');
  const [datePosted, setDatePosted] = useState<string>('All time');
  const [workExperience, setWorkExperience] = useState<string>('Any experience');
  const [employmentType, setEmploymentType] = useState<EmploymentType[]>(['Full-time']);

  const [isLocationExpanded, setIsLocationExpanded] = useState<boolean>(true);
  const [isSalaryExpanded, setIsSalaryExpanded] = useState<boolean>(true);
  const [isDateExpanded, setIsDateExpanded] = useState<boolean>(true);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState<boolean>(true);
  const [isEmploymentExpanded, setIsEmploymentExpanded] = useState<boolean>(true);

  const toggleSection = (section: SectionName) => {
    switch (section) {
      case 'location':
        setIsLocationExpanded(!isLocationExpanded);
        break;
      case 'salary':
        setIsSalaryExpanded(!isSalaryExpanded);
        break;
      case 'date':
        setIsDateExpanded(!isDateExpanded);
        break;
      case 'experience':
        setIsExperienceExpanded(!isExperienceExpanded);
        break;
      case 'employment':
        setIsEmploymentExpanded(!isEmploymentExpanded);
        break;
    }
  };

  const handleEmploymentTypeChange = (type: EmploymentType) => {
    setEmploymentType(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const RadioButton: React.FC<{ label: string; checked: boolean; onChange: () => void }> = ({ label, checked, onChange }) => (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          type="radio"
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        <div className="w-6 h-6 border-2 border-gray-300 rounded-full transition-colors group-hover:border-green-500">
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 btn rounded-full"></div>
            </div>
          )}
        </div>
      </div>
      <span className="text-gray-700 group-hover:text-green-500">{label}</span>
    </label>
  );

  const Checkbox: React.FC<{ label: string; checked: boolean; onChange: () => void }> = ({ label, checked, onChange }) => (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        <div className="w-6 h-6 border-2 border-gray-300 rounded transition-colors group-hover:border-green-500">
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center textColor">
              <Check size={16} />
            </div>
          )}
        </div>
      </div>
      <span className="text-gray-700 group-hover:text-green-500">{label}</span>
    </label>
  );

  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleSection('location')}>
          <h3 className="font-medium">Location</h3>
          {isLocationExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isLocationExpanded && (
          <div className="space-y-3">
            <RadioButton
              label="Near me"
              checked={locationFilter === 'Near me'}
              onChange={() => setLocationFilter('Near me')}
            />
            <RadioButton
              label="Remote job"
              checked={locationFilter === 'Remote job'}
              onChange={() => setLocationFilter('Remote job')}
            />
            <RadioButton
              label="Exact location"
              checked={locationFilter === 'Exact location'}
              onChange={() => setLocationFilter('Exact location')}
            />
            <RadioButton
              label="Within 15 km"
              checked={locationFilter === 'Within 15 km'}
              onChange={() => setLocationFilter('Within 15 km')}
            />
            <RadioButton
              label="Within 30 km"
              checked={locationFilter === 'Within 30 km'}
              onChange={() => setLocationFilter('Within 30 km')}
            />
            <RadioButton
              label="Within 50 km"
              checked={locationFilter === 'Within 50 km'}
              onChange={() => setLocationFilter('Within 50 km')}
            />
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleSection('salary')}>
          <h3 className="font-medium">Salary</h3>
          {isSalaryExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isSalaryExpanded && (
          <div>
            <div className="flex mb-4">
              <button
                className={`px-3 py-2 text-sm ${salaryPeriod === 'Hourly' ? 'bg-green-100 textColor' : 'bg-gray-100'} rounded-l transition-colors`}
                onClick={() => setSalaryPeriod('Hourly')}
              >
                Hourly
              </button>
              <button
                className={`px-3 py-2 text-sm ${salaryPeriod === 'Monthly' ? 'bg-green-100 textColor' : 'bg-gray-100'} transition-colors`}
                onClick={() => setSalaryPeriod('Monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-3 py-2 text-sm ${salaryPeriod === 'Yearly' ? 'bg-green-100 textColor' : 'bg-gray-100'} rounded-r transition-colors`}
                onClick={() => setSalaryPeriod('Yearly')}
              >
                Yearly
              </button>
            </div>
            <div className="space-y-3">
              <RadioButton
                label="Any"
                checked={salaryFilter === 'Any'}
                onChange={() => setSalaryFilter('Any')}
              />
              <RadioButton
                label="> 30000k"
                checked={salaryFilter === '> 30000k'}
                onChange={() => setSalaryFilter('> 30000k')}
              />
              <RadioButton
                label="> 50000k"
                checked={salaryFilter === '> 50000k'}
                onChange={() => setSalaryFilter('> 50000k')}
              />
              <RadioButton
                label="> 80000k"
                checked={salaryFilter === '> 80000k'}
                onChange={() => setSalaryFilter('> 80000k')}
              />
              <RadioButton
                label="> 100000k"
                checked={salaryFilter === '> 100000k'}
                onChange={() => setSalaryFilter('> 100000k')}
              />
            </div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleSection('date')}>
          <h3 className="font-medium">Date of posting</h3>
          {isDateExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isDateExpanded && (
          <div className="space-y-3">
            <RadioButton
              label="All time"
              checked={datePosted === 'All time'}
              onChange={() => setDatePosted('All time')}
            />
            <RadioButton
              label="Last 24 hours"
              checked={datePosted === 'Last 24 hours'}
              onChange={() => setDatePosted('Last 24 hours')}
            />
            <RadioButton
              label="Last 3 days"
              checked={datePosted === 'Last 3 days'}
              onChange={() => setDatePosted('Last 3 days')}
            />
            <RadioButton
              label="Last 7 days"
              checked={datePosted === 'Last 7 days'}
              onChange={() => setDatePosted('Last 7 days')}
            />
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleSection('experience')}>
          <h3 className="font-medium">Work experience</h3>
          {isExperienceExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isExperienceExpanded && (
          <div className="space-y-3">
            <RadioButton
              label="Any experience"
              checked={workExperience === 'Any experience'}
              onChange={() => setWorkExperience('Any experience')}
            />
            <RadioButton
              label="Internship"
              checked={workExperience === 'Internship'}
              onChange={() => setWorkExperience('Internship')}
            />
            <RadioButton
              label="Work remotely"
              checked={workExperience === 'Work remotely'}
              onChange={() => setWorkExperience('Work remotely')}
            />
          </div>
        )}
      </div>

      <div>
        <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleSection('employment')}>
          <h3 className="font-medium">Type of employment</h3>
          {isEmploymentExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isEmploymentExpanded && (
          <div className="space-y-3">
            <Checkbox
              label="Full-time"
              checked={employmentType.includes('Full-time')}
              onChange={() => handleEmploymentTypeChange('Full-time')}
            />
            <Checkbox
              label="Temporary"
              checked={employmentType.includes('Temporary')}
              onChange={() => handleEmploymentTypeChange('Temporary')}
            />
            <Checkbox
              label="Part-time"
              checked={employmentType.includes('Part-time')}
              onChange={() => handleEmploymentTypeChange('Part-time')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobFilter;