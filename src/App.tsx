import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Nav from "./Nav";
import ConfirmationDialog from "./ConfirmationDialog";
import FavouritesFree from "./FavouritesFree";


interface Props{
 
}

const App: React.FC<Props>=(props)=>{


  return(
      <div className="font-sans">
    
      <Nav />
      <Header /><ConfirmationDialog  description="Do you really want to delete these records? This process cannot be undone."/>
     
     <HeroSection/>
     <ConfirmationDialog  description="Do you really want to delete these records? This process cannot be undone."/>
       <FavouritesFree></FavouritesFree>
        </div>
    );
};
App.defaultProps={
}

export default App;



