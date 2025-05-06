import React from 'react';
import team from "../../assets/team.webp"
const Banner: React.FC = () => {

    const styleBanner =
        {
            backgroundImage: `url(${team})`,
            backgroundPosition:"center 20%",
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat",
            filter: "brightness(30%)"
          }
    
  return (
    <div className="relative w-full h-[400px] md:h-[400px] lg:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={styleBanner}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
          We're more than just a workplace. We're a family.
        </h1>
        <button className="button text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Banner;