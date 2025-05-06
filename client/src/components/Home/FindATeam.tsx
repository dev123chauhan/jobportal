import React from 'react';
import { ArrowRight } from 'lucide-react';
import findATeam from "../../assets/findateam.jpg"
import peopleimage from "../../assets/peapleimage.png"
import salesserviceandsupport from "../../assets/salesserviceandsupport.webp"
import marketing from "../../assets/marketing.png"
interface TeamCategory {
  title: string;
  description: string;
  imageUrl: string;
}

const teamCategories: TeamCategory[] = [
  {
    title: "Engineering & Tech",
    description: "Join our innovative engineering teams working on cutting-edge technologies. We're looking for software developers, data scientists, IT specialists, and system architects who are passionate about building solutions that transform industries.",
    imageUrl: findATeam
  },
  {
    title: "People",
    description: "Our People teams build company culture and help employees thrive. We seek HR specialists, talent acquisition experts, learning & development professionals, and diversity & inclusion advocates who can help us build a world-class workplace.",
    imageUrl: peopleimage
  },
  {
    title: "Sales, Service, & Support",
    description: "Drive business growth and ensure customer success with our sales and support teams. We need account executives, customer success managers, technical support specialists, and sales operations professionals who excel at building relationships.",
    imageUrl: salesserviceandsupport
  },
  {
    title: "Marketing",
    description: "Create compelling stories and drive market engagement with our marketing teams. We're looking for content creators, digital marketers, brand strategists, and market analysts who can help our products and services stand out in the market.",
    imageUrl: marketing
  }
];

const TeamCategoryCard: React.FC<TeamCategory> = ({ title, description, imageUrl }) => (
  <div className="flex flex-col md:flex-row gap-4 mb-8">
    <img src={imageUrl} alt={title} className="w-full md:w-1/3 h-48 object-cover rounded-lg" />
    <div className="md:w-2/3">
      <h3 className="text-xl font-semibold textColor mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const FindATeam: React.FC = () => (
  <div className="max-w-7xl mx-auto py-12">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold">Find your team</h2>
      <a href="#" className="text-black hover:underline flex items-center">
        View all teams <ArrowRight className="ml-1" size={20} />
      </a>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {teamCategories.map((category, index) => (
        <TeamCategoryCard key={index} {...category} />
      ))}
    </div>
  </div>
);

export default FindATeam;