import React from "react";
import { Children } from "react";

interface Props{
 children: React.ReactNode[];
}

const Tabs: React.FC<Props>=(props)=>{
    const tabWidth: 100/children.length;
    return(
       
             <div>
         <div className="pb-1 bg-primary-100">
             <div className="relative max-w-md mx-auto ">
                 <div className="flex text-xl font-bold ">
                 {tabs.map((tab, index)=>(
                   <div className="flex-1 px-8 py-4 text-center cursor-pointer" onClick={()=> setSelectedIndex(index)}>
                   {tab.title}<span className="text-gold text-xs">★</span>
                   
               </div>
                 ))}
                 </div>
               
                <div className="absolute  bg-primary-400 h-1 ease-in-out duration-300" style={{width: tabWidth+"%", left:(tabWidth * selectedIndex)+"%"}}></div>
             </div>
         </div>
         <div className="bg-primary-200 relative">
             {children.map((child,index)=>(
                <Transition 
                show={index=== selectedIndex}
                enter="transition-opacity duration-300" 
                enterFrom="opacity-0"
                enterTo="opacity-100" 
                entered="opacity-100"
                leave="transition-opacity duration-50"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                         <div className="px-2 py-4 absolute left-0 right-0 top-0 text-center "><span>{child}</span></div>       
                </Transition>
             ))}
            
         </div>
     
         
        </div>
    );
};
Tabs.defaultProps={
}

export default Tabs;