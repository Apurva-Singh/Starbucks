import React, {Fragment, useState} from "react";
import {Transition} from '@headlessui/react';

interface Props{
 children: React.ReactElement[];
}

const Tabs: React.FC<Props>=({children})=>{
    const [selectedIndex, setSelectedIndex]= useState(0);

    const tabWidth= 100 / children.length;
    return(
       
             <div>
         <div className="pb-1 bg-primary-100">
             <div className="relative max-w-md mx-auto ">
                 <div className="flex text-xl font-bold ">
                 {children.map((child, index)=>(
                   <div className="flex-1 px-2 py-4 text-center cursor-pointer" onClick={()=> setSelectedIndex(index)}>
                   {child.props.title}
                   <span className="text-gold text-xs">★</span> 
               </div>
                 ))}
                 </div>
               
                <div className="absolute bg-primary-400 h-1 ease-in-out duration-300"
                style={{
                width: tabWidth+"%",
                left: tabWidth * selectedIndex+"%",
                    
                     }}>

            </div>
             </div>
         </div>
         <div className="bg-primary-200 relative">
             {children.map((child,index)=>(
                <Transition as={Fragment}
                show={index=== selectedIndex}
                enter="transition-opacity duration-300" 
                enterFrom="opacity-0"
                enterTo="opacity-100" 
                entered="opacity-100"
                leave="transition-opacity duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                 <div className="absolute bg-primary-200 px-2 py-4 left-0 right-0 top-0 text-center ">
                {child}</div>       
                </Transition>
             ))}
            
         </div>
     
         
        </div>
    );
};
Tabs.defaultProps={
}

export default Tabs;