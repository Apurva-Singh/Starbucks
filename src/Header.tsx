import React from "react";
import RoundedLink from "./RoundedLink";

interface Props{
 
}

const Header: React.FC<Props>=(props)=>{
    return(
        <div className="flex sticky top-0 justify-between bg-primary-400 px-4 py-2 items-center">
      <p className="text-13 font-bold text-white">
        STARBUCKS® REWARDS
      </p>
      <RoundedLink
      
        href="www.starbucks.com"
        theme="white"
        target="_blank"
      >Join in the app</RoundedLink>
    </div>
    );
};
Header.defaultProps={
}

export default Header;