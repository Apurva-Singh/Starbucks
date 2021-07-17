import React from "react"; 

export interface Props{
 title: string | React.ReactElement;
 children: React.ReactNode;
}

const Tab: React.FC<Props>=({children})=>{
   
    return(
        <div>
         {children}
        </div>
    );
};
Tab.defaultProps={
}

export default Tab;