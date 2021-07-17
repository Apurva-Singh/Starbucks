import React from "react";

interface Props{
  children: React.ReactNode;
  img?: string;
  alt?: string;
  heading?: string;
  headingLarge?: string;
 
}

const GettingStartedBlocks: React.FC<Props>=({children})=>{
    return(
        <div>
          {children}
        </div>
    );
};
GettingStartedBlocks.defaultProps={
}

export default GettingStartedBlocks;