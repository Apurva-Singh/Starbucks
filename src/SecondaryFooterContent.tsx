import React from "react";

interface Props{
 title: string;
 children: React.ReactNode;
}

const SecondaryFooterContent: React.FC<Props>=({title,children})=>{
    return(
        <div className="ml-3">
            <h2 className="mt-10 text-gray-500">{title}</h2>
         {children}
        </div>
    );
};
SecondaryFooterContent.defaultProps={
}

export default SecondaryFooterContent;