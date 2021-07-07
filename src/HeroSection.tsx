import React from "react";

interface Props{
 
}

const HeroSection: React.FC<Props>=(props)=>{
    return(
        <div className="aspect-w-3 aspect-h-4">
        <div className=" bg-primary-200 bg-hero bg-cover">
          <h1>FREE COFFEE IS A TAP AWAY</h1>
         
        </div>
      </div>
    );
};
HeroSection.defaultProps={
}

export default HeroSection;