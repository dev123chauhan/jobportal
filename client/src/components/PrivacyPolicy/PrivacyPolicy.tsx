import  { useState, ReactNode } from 'react';

// Define section ID type to ensure type safety
type SectionId = 
  | "introduction" 
  | "information" 
  | "usage" 
  | "sharing" 
  | "security" 
  | "cookies" 
  | "rights" 
  | "updates" 
  | "contact";

// Define section type
interface Section {
  id: SectionId;
  title: string;
}

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("introduction");
  const brandColor = "#309689";

  const sections: Section[] = [
    { id: "introduction", title: "Introduction" },
    { id: "information", title: "Information We Collect" },
    { id: "usage", title: "How We Use Information" },
    { id: "sharing", title: "Information Sharing" },
    { id: "security", title: "Data Security" },
    { id: "cookies", title: "Cookies Policy" },
    { id: "rights", title: "Your Rights" },
    { id: "updates", title: "Policy Updates" },
    { id: "contact", title: "Contact Us" },
  ];

  // Define content object with correct type
  const content: Record<SectionId, ReactNode> = {
    introduction: (
      <div>
        <h3 className="text-xl font-semibold mb-3">Welcome to Our Privacy Policy</h3>
        <p className="mb-4">
          Last Updated: May 5, 2025
        </p>
        <p className="mb-4">
          This Privacy Policy describes how we collect, use, process, and disclose your information, 
          including personal information, in conjunction with your access to and use of our services.
        </p>
        <p>
          By using our services, you acknowledge that you have read and understand this Privacy Policy. 
          We are committed to protecting your personal information and your right to privacy.
        </p>
      </div>
    ),
    information: (
      <div>
        <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
        <p className="mb-4">We collect several types of information from and about users of our Services, including:</p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Personal identifiers such as name, email address, and phone number</li>
          <li className="mb-2">Account information such as username and password</li>
          <li className="mb-2">Payment and transaction information</li>
          <li className="mb-2">Usage data and analytics</li>
          <li className="mb-2">Device information and IP address</li>
        </ul>
        <p>
          We collect this information when you register on our platform, place an order, 
          subscribe to our newsletter, respond to a survey, or fill out a form.
        </p>
      </div>
    ),
    usage: (
      <div>
        <h3 className="text-xl font-semibold mb-3">How We Use Information</h3>
        <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Provide, maintain, and improve our services</li>
          <li className="mb-2">Process transactions and send related information</li>
          <li className="mb-2">Send administrative messages and updates</li>
          <li className="mb-2">Respond to comments, questions, and requests</li>
          <li className="mb-2">Send marketing communications</li>
          <li className="mb-2">Monitor and analyze trends, usage, and activities</li>
          <li className="mb-2">Protect against, identify, and prevent fraud and other illegal activity</li>
        </ul>
      </div>
    ),
    sharing: (
      <div>
        <h3 className="text-xl font-semibold mb-3">Information Sharing</h3>
        <p className="mb-4">We may share your personal information with:</p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Service providers who perform services on our behalf</li>
          <li className="mb-2">Business partners with whom we jointly offer products or services</li>
          <li className="mb-2">Affiliated companies within our corporate family</li>
          <li className="mb-2">Law enforcement or other governmental authorities in response to a legal request</li>
        </ul>
        <p>
          We do not sell your personal information to third parties for monetary compensation.
        </p>
      </div>
    ),
    security: (
      <div>
        <h3 className="text-xl font-semibold mb-3">Data Security</h3>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect the security of your personal information.
          However, please be aware that no security system is impenetrable and we cannot guarantee the absolute security of our systems.
        </p>
        <p>
          We regularly review our security practices to identify security threats and 
          implement appropriate measures to protect your information.
        </p>
      </div>
    ),
    cookies: (
      <div>
        <h3 className="text-xl font-semibold mb-3">Cookies Policy</h3>
        <p className="mb-4">
          We use cookies and similar tracking technologies to track activity on our services and 
          hold certain information to enhance your experience.
        </p>
        <p className="mb-4">
          Cookies are files with a small amount of data that may include an anonymous unique identifier. 
          They are sent to your browser from a website and stored on your device.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
          However, if you do not accept cookies, you may not be able to use some portions of our service.
        </p>
      </div>
    ),
    rights: (
      <div>
        <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
        <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Right to access the personal information we have about you</li>
          <li className="mb-2">Right to rectify or update your personal information</li>
          <li className="mb-2">Right to erase or delete your personal information</li>
          <li className="mb-2">Right to restrict processing of your personal information</li>
          <li className="mb-2">Right to object to processing of your personal information</li>
          <li className="mb-2">Right to data portability</li>
          <li className="mb-2">Right to withdraw consent</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.
        </p>
      </div>
    ),
    updates: (
      <div>
        <h3 className="text-xl font-semibold mb-3">Policy Updates</h3>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. The updated version will be indicated by an 
          updated "Last Updated" date at the top of this Privacy Policy.
        </p>
        <p>
          We encourage you to review this Privacy Policy frequently to stay informed about how we are protecting your information.
          Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of such changes.
        </p>
      </div>
    ),
    contact: (
      <div>
        <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2"><strong>Email:</strong> privacy@yourcompany.com</p>
          <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Privacy Street, Suite 100, San Francisco, CA 94105</p>
        </div>
      </div>
    ),
  };

  // Type assertion to ensure TypeScript knows activeSection is a valid key
  const currentContent = content[activeSection];
  
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      {/* <header className="w-full bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold" style={{ color: brandColor }}>Your Company</h1>
            </div>
            <div>
              <button 
                className="px-4 py-2 rounded-lg text-white font-medium transition-all"
                style={{ backgroundColor: brandColor }}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-8xl mx-auto">
        <div className=" overflow-hidden">
          {/* Title Banner */}
          <div className="px-6 py-8" style={{ backgroundColor: brandColor }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Privacy Policy</h2>
          </div>

          <div className="p-4 md:p-8">
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Navigation Sidebar */}
              <div className="md:col-span-1">
                <div className="sticky top-8 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4">Contents</h3>
                  <nav>
                    <ul>
                      {sections.map((section) => (
                        <li key={section.id} className="mb-2">
                          <button
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full text-left px-3 py-2 rounded-md transition-all ${
                              activeSection === section.id
                                ? "font-medium text-white"
                                : "hover:bg-gray-200 text-gray-700"
                            }`}
                            style={{ 
                              backgroundColor: activeSection === section.id ? brandColor : 'transparent' 
                            }}
                          >
                            {section.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Content Area */}
              <div className="md:col-span-3">
                <div className="bg-white p-4 md:p-6 rounded-lg">
                  {currentContent}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => {
                      const currentIndex = sections.findIndex(s => s.id === activeSection);
                      if (currentIndex > 0) {
                        setActiveSection(sections[currentIndex - 1].id as SectionId);
                      }
                    }}
                    disabled={sections.findIndex(s => s.id === activeSection) === 0}
                    className={`px-4 py-2 rounded-lg flex items-center ${
                      sections.findIndex(s => s.id === activeSection) === 0
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "text-white"
                    }`}
                    style={{ 
                      backgroundColor: sections.findIndex(s => s.id === activeSection) === 0 
                        ? undefined 
                        : brandColor 
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      const currentIndex = sections.findIndex(s => s.id === activeSection);
                      if (currentIndex < sections.length - 1) {
                        setActiveSection(sections[currentIndex + 1].id as SectionId);
                      }
                    }}
                    disabled={sections.findIndex(s => s.id === activeSection) === sections.length - 1}
                    className={`px-4 py-2 rounded-lg flex items-center ${
                      sections.findIndex(s => s.id === activeSection) === sections.length - 1
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "text-white"
                    }`}
                    style={{ 
                      backgroundColor: sections.findIndex(s => s.id === activeSection) === sections.length - 1 
                        ? undefined 
                        : brandColor 
                    }}
                  >
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

 
    </div>
  );
};

export default PrivacyPolicy;