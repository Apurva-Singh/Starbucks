import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Nav from "./Nav";
import ConfirmationDialog from "./ConfirmationDialog";
import Tab from "./Tab";
import Tabs from "./Tabs";


interface Props{
 
}

const App: React.FC<Props>=(props)=>{
  const tabs=
  [
    {title:"25",content:"Thi is tab1"},
    {title:"50",content:"Thi is tab2"},
    {title:"150",content:"Thi is tab3"},
    {title:"200",content:"Thi is tab4"},
    {title:"400",content:"Thi is tab5"},
  ];

  return(
      <div className="font-sans">
    
      <Nav />
      <Header /><ConfirmationDialog  description="Do you really want to delete these records? This process cannot be undone."/>
     
     <HeroSection/>
      <Tabs>{tabs.map(tab=><Tab title={tab.title}>{tab.content}</Tab>)}</Tabs>

    <div className="h-2 m-8"></div>
     <Tabs>
            <Tab title="25" >Tab1 content</Tab>
            <Tab title="50" >Tab2 content</Tab>
            <Tab title="150" >Tab3 content</Tab>
        
       </Tabs>
        </div>
    );
};
App.defaultProps={
}

export default App;



