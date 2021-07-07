import { Transition } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import Tab from "./Tab";
import Tabs from "./Tabs";

interface Props{
 
}

const FavouritesFree: React.FC<Props>=(props)=>{

    // const tabs=[{title:25,content:"Thi is tab1"},
    // {title:50,content:"Thi is tab2"},
    // {title:150,content:"Thi is tab3"},
    // {title:200,content:"Thi is tab4"},
    // {title:400,content:"Thi is tab5"},];

    // const [selectedIndex, setSelectedIndex]= useState(0);
    // const tabWidth= 100/ tabs.length;
    // const positionClass= selectedIndex===0 ? "left-0": "left-" + selectedIndex+ "/5";
    return(
       <>
       <Tabs>
            <Tab title="25" >Tab1 content</Tab>
            <Tab title="50" >Tab2 content</Tab>
            <Tab title="150" >Tab3 content</Tab>
       </Tabs>
       </>
    );
};
FavouritesFree.defaultProps={
}

export default FavouritesFree;