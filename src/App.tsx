import React from "react";
import GettingStarted from "./GettingStarted";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Nav from "./Nav";
import Tab from "./Tab";
import Tabs from "./Tabs";
// import rewardsTabContent from './rewardsTabContent';


interface Props{
 
}

const App: React.FC<Props>=(props)=>{

  return(
      <div className="font-sans">
    
      <Nav />
      <Header />
      {/* <ConfirmationDialog  description="Do you really want to delete these records? This process cannot be undone."/> */}
     
     <HeroSection/>

     <GettingStarted />

     <Tabs>
            <Tab title="25">Tab1 content.
            </Tab>
            <Tab title="50" >Tab2 content</Tab>
            <Tab title="150" >Tab3 content</Tab>
        
       </Tabs>
        </div>
    );
};
App.defaultProps={
}

export default App;



