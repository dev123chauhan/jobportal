import React from 'react';
import { ArrowRight } from 'lucide-react';
import china from "../../assets/china.jpg"
import australia from "../../assets/australia.webp"
import newzealand from "../../assets/newzealand.webp"
import canada from "../../assets/canada.webp"
 
interface Location {
  name: string;
  jobs: number;
  imageUrl: string;
}

const locations: Location[] = [
  { name: 'Australia', jobs: 120, imageUrl: australia },
  { name: 'Canada', jobs: 90, imageUrl: canada },
  { name: 'Philippines', jobs: 173, imageUrl: newzealand },
  { name: 'New Zealand', jobs: 80, imageUrl: china },
];

const LocationCard: React.FC<Location> = ({ name, jobs, imageUrl }) => (
  <div className="relative overflow-hidden rounded-lg group">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
      <h3 className="text-white text-xl font-semibold">{name}</h3>
      <p className="text-white text-sm">{jobs} jobs</p>
    </div>
    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowRight className="text-white" size={24} />
    </div>
  </div>
);

const OurLocation: React.FC = () => (
  <div className="max-w-7xl mx-auto  py-12">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">Our locations</h2>
      <a href="#" className="text-black hover:underline flex items-center">
        View all locations <ArrowRight className="ml-1" size={20} />
      </a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {locations.map((location, index) => (
        <LocationCard key={index} {...location} />
      ))}
    </div>
  </div>
);

export default OurLocation;