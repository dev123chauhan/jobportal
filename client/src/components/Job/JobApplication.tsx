// ApplicationPopup.tsx
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ApplicationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const JobApplication: React.FC<ApplicationPopupProps> = ({ isOpen, onClose, jobTitle }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes zoomIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .popup-animation {
        animation: zoomIn 0.3s forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform scale-90 opacity-0 popup-animation">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Apply for {jobTitle}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" id="firstName" name="firstName" required
                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" id="lastName" name="lastName" required
                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" name="email" required
                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
            <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required
                   className="w-full px-3 py-2 text-sm text-gray-500 
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-md file:border-0
                              file:text-sm file:font-semibold
                              file:bg-blue-50 file:text-blue-700
                              hover:file:bg-blue-100" />
          </div>
          <button type="submit" className="w-full button text-white py-2 px-4 rounded-md  transition-colors">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;