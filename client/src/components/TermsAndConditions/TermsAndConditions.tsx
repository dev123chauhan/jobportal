import { useState } from 'react';
import { Check, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

// Define types for our accordion items
type AccordionItem = {
  title: string;
  content: string;
};

export default function TermsAndConditions() {
  const [accepted, setAccepted] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(0);

  // Toggle accordion section
  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Sample Terms and Conditions sections
  const termsData: AccordionItem[] = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. User Registration",
      content: "Some portions of this service may require user registration. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete."
    },
    {
      title: "3. Privacy Policy",
      content: "Your privacy is important to us. Our Privacy Policy explains how we collect, use, protect, and disclose information and data when you use our service. By using our service, you agree to our collection and use of information in accordance with our Privacy Policy."
    },
    {
      title: "4. Intellectual Property",
      content: "The service and its original content, features, and functionality are owned by our company and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
    },
    {
      title: "5. Termination",
      content: "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms."
    },
    {
      title: "6. Limitation of Liability",
      content: "In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service."
    },
    {
      title: "7. Changes to Terms",
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <button className="mr-4 text-gray-600 hover:text-gray-800">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold text-gray-800">Terms and Conditions</h1>
          </div>
          <div className="hidden md:block">
            <button 
              className={`px-6 py-2 rounded-lg ${
                accepted 
                  ? "bg-gray-200 text-gray-600" 
                  : "bg-[#309689] text-white hover:bg-opacity-90"
              }`}
              onClick={() => setAccepted(!accepted)}
            >
              {accepted ? "Accepted" : "Accept Terms"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Introduction Section */}
        <div className="bg-white p-6 mb-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to Our Service</h2>
          <p className="text-gray-600 mb-4">
            These Terms and Conditions govern your use of our website and services. Please read these terms carefully before using our service.
          </p>
          <p className="text-gray-600">
            Last Updated: May 5, 2025
          </p>
        </div>

        {/* Terms Accordion */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          {termsData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleSection(index)}
              >
                <span className="font-medium text-gray-800">{item.title}</span>
                {openSection === index ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>
              {openSection === index && (
                <div className="px-6 pb-4 pt-2 text-gray-600">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Acceptance Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <div className="flex items-start space-x-3">
            <div 
              className={`mt-1 w-5 h-5 rounded flex items-center justify-center ${
                accepted ? "bg-[#309689]" : "border-2 border-gray-300"
              }`}
              onClick={() => setAccepted(!accepted)}
            >
              {accepted && <Check size={16} className="text-white" />}
            </div>
            <div>
              <p className="text-gray-700">
                I have read and agree to the Terms and Conditions and Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Accept Button */}
        <div className="md:hidden mt-6">
          <button 
            className={`w-full px-6 py-3 rounded-lg ${
              accepted 
                ? "bg-gray-200 text-gray-600" 
                : "bg-[#309689] text-white hover:bg-opacity-90"
            }`}
            onClick={() => setAccepted(!accepted)}
          >
            {accepted ? "Terms Accepted" : "Accept Terms"}
          </button>
        </div>
      </main>

      {/* Footer */}
    
    </div>
  );
}