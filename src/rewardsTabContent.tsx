import React from "react";

interface Props{
 image: string;
 title: string;
 description : string; 
}

const rewardsTabContent: React.FC<Props>=(props)=>{
    return(
        <div>
         here
        </div>
    );
};
rewardsTabContent.defaultProps={
}

export default rewardsTabContent;