import React from "react";

interface Props{
 image?: string;
 title: string;
 description : string; 
}

const RewardsTabContent: React.FC<Props>=({image,title, description})=>{
    return(
        <div
          className="
            2xl:max-w-60
            flex-col
            md:flex-row md:flex md:justify-center md:items-center
            text-center
            2xl:m-auto
          "
        >
          <div className="md:w-1/3">
            <img
              src={image}
              className="md:h-56 md:float-right"
              alt="tea "
            />
          </div>
          <div className="flex-col md:w-1/4 md:text-left">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm">
            {description}
            </p>
          </div>
        </div>
    );
};
RewardsTabContent.defaultProps={
}

export default RewardsTabContent;