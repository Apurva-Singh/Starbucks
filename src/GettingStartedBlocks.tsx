import React from "react";

interface Props{
  imgURL?: string;
  heading: string;
  headingLarge?: string;
  alt: string;
  children: React.ReactNode;
 
}

const GettingStartedBlocks: React.FC<Props>=({imgURL, heading, children,headingLarge,alt})=>{
    return(
        <div>
        <div className="flex md:flex-col flex-1 md:py-0 ">
          <div className="md:m-auto">
                <img src={imgURL} alt={alt} className="md:h-10 md:w-10" />
              </div>
              <div className="text-left px-2 md:text-center">
                <h2 className="font-semibold md:hidden">
                 {heading}
                </h2>
                <h2 className="font-semibold hidden md:block pt-4">
                 {headingLarge}
                </h2>
                {children}
      
              </div>
            </div>
        </div>
    );
};
GettingStartedBlocks.defaultProps={
}

export default GettingStartedBlocks;