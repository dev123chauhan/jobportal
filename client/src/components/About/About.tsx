import React, { useState } from 'react';
import { 
  Mail,
  MessageCircle,
  ArrowRight,
  Check
} from 'lucide-react';

// Define TypeScript interfaces for all data structures
interface Stat {
  id: number;
  value: string;
  label: string;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// Define type for tab states
type TabType = 'mission' | 'vision' | 'values';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('mission');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Company stats
  const stats: Stat[] = [
    { id: 1, value: '10+', label: 'Years of Experience' },
    { id: 2, value: '250+', label: 'Projects Completed' },
    { id: 3, value: '95%', label: 'Client Satisfaction' },
    { id: 4, value: '30+', label: 'Team Members' },
  ];
  
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      bio: 'Sarah has over 15 years of experience in the industry and leads our company vision.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      image: '/api/placeholder/150/150',
      bio: 'Michael oversees all technical aspects and innovations within our company.',
    },
    {
      id: 3,
      name: 'Aisha Patel',
      position: 'Design Director',
      image: '/api/placeholder/150/150',
      bio: 'Aisha brings creativity and user-focused design thinking to all our projects.',
    },
    {
      id: 4,
      name: 'David Rodriguez',
      position: 'Marketing Lead',
      image: '/api/placeholder/150/150',
      bio: 'David crafts our brand story and connects our solutions with customers worldwide.',
    },
  ];
  
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Emma Wilson',
      role: 'Marketing Director',
      company: 'TechSolutions Inc.',
      content: 'Working with this team transformed our online presence. Their attention to detail and technical expertise is unmatched in the industry.',
      avatar: '/api/placeholder/80/80',
    },
    {
      id: 2,
      name: 'James Anderson',
      role: 'CEO',
      company: 'Global Ventures',
      content: 'What impressed me most was their ability to understand our business needs and translate them into effective digital solutions.',
      avatar: '/api/placeholder/80/80',
    },
    {
      id: 3,
      name: 'Maria Garcia',
      role: 'Operations Manager',
      company: 'InnovateTech',
      content: 'The teams responsiveness and collaborative approach made the entire process seamless. Highly recommended for any business looking to grow.',
      avatar: '/api/placeholder/80/80',
    },
  ];
  
  // FAQ data
  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of digital solutions including web development, mobile app development, UI/UX design, digital marketing, and business consulting. Each service is tailored to meet our clients specific needs and objectives.',
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we will provide a detailed timeline based on your specific requirements.',
    },
    {
      id: 3,
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing models including fixed project rates, hourly rates, and retainer options. Each quote is customized based on project requirements, timeline, and complexity. Were committed to providing transparent pricing with no hidden costs.',
    },
    {
      id: 4,
      question: 'How do you handle project communication?',
      answer: 'We believe in transparent and regular communication. Each client is assigned a dedicated project manager who provides weekly updates. We use collaborative tools like Slack, Trello, and regular video calls to ensure you are always informed about your projectss progress.',
    },
    {
      id: 5,
      question: 'Do you provide support after project completion?',
      answer: 'Yes, we offer post-launch support and maintenance packages. Our standard projects come with a 30-day warranty period, and we offer extended support plans tailored to your ongoing needs.',
    },
  ];

  // Toggle FAQ accordion
  const toggleFaq = (id: number): void => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-teal-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Our Company</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              We're a team of passionate individuals dedicated to creating innovative solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center">
                Our Services <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#F9FAFB" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="bg-teal-600 rounded-lg absolute top-6 left-6 w-full h-full -z-10"></div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Our Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <div className="h-1 w-20 bg-teal-600 mb-6"></div>
            <p className="text-gray-600 mb-4">
              Founded in 2014, our company began with a simple mission: to help businesses thrive in the digital age by providing cutting-edge solutions tailored to their unique needs.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small team of three passionate individuals has grown into a diverse group of experts spanning multiple disciplines. Over the years, we've partnered with hundreds of businesses across various industries, helping them achieve their goals through innovative technology and strategic thinking.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we continue to push boundaries and embrace new challenges, always staying true to our core values of excellence, integrity, and client satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Check size={20} className="text-teal-600 mr-2" />
                <span className="text-gray-700">Innovation-driven</span>
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-teal-600 mr-2" />
                <span className="text-gray-700">Client-focused</span>
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-teal-600 mr-2" />
                <span className="text-gray-700">Quality-assured</span>
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-teal-600 mr-2" />
                <span className="text-gray-700">Results-oriented</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Our Foundation</h2>
          <div className="h-1 w-20 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            The core principles that guide our every decision and shape our approach to business.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button 
              className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === 'mission' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === 'vision' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
            <button 
              className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === 'values' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('values')}
            >
              Our Values
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {activeTab === 'mission' && (
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses through innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their audiences.
                </p>
                <p className="text-gray-600">
                  We are committed to understanding each client's unique challenges and delivering tailored solutions that exceed expectations. By combining technical expertise with strategic thinking, we help organizations navigate the complexities of the digital landscape and achieve sustainable success.
                </p>
              </div>
            )}
            
            {activeTab === 'vision' && (
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading digital transformation partner for forward-thinking organizations worldwide, known for our innovative approach, technical excellence, and unwavering commitment to client success.
                </p>
                <p className="text-gray-600">
                  We envision a future where every business, regardless of size or industry, can harness the full potential of technology to create value, solve problems, and make a positive impact on the world.
                </p>
              </div>
            )}
            
            {activeTab === 'values' && (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-800">Our Values</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Excellence</h4>
                    <p className="text-gray-600 text-sm">
                      We strive for excellence in every aspect of our work, from code quality to client communication.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Integrity</h4>
                    <p className="text-gray-600 text-sm">
                      We operate with honesty, transparency, and ethical principles in all our dealings.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Innovation</h4>
                    <p className="text-gray-600 text-sm">
                      We embrace change and continuously seek new and better ways to solve problems.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Collaboration</h4>
                    <p className="text-gray-600 text-sm">
                      We believe in the power of teamwork and partnerships to achieve extraordinary results.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
            <div className="h-1 w-20 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our diverse team of experts brings together a wealth of knowledge and experience to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-medium text-lg text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-teal-600 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-all inline-flex items-center">
              Join Our Team <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Don't just take our word for it – hear what our clients have to say about their experiences working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="mb-4">
                <button
                  className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium text-gray-800 text-left">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-teal-600 transform ${activeFaq === faq.id ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === faq.id && (
                  <div className="bg-white px-4 pt-0 pb-4 rounded-b-lg shadow-sm -mt-1">
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how we can help you achieve your goals and take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center justify-center">
                <MessageCircle size={18} className="mr-2" />
                Schedule a Consultation
              </a>
              <a href="#" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-all inline-flex items-center justify-center">
                <Mail size={18} className="mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>  
  );
};

export default About;