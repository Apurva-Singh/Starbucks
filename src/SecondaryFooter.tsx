import React from "react";
import SecondaryFooterContent from './SecondaryFooterContent';

interface Props{
    title?: React.ReactNode;
   children: React.ReactElement[];
 
}

const SecondaryFooter: React.FC<Props>=({ title, children})=>{
    children.forEach((c) => {
        if (c.type !== SecondaryFooterContent) {
          // eslint-disable-next-line no-throw-literal
          throw "Children of tablist should be SecondaryFooterContent. received " + c.type;
        }
      });
    return(
        <div className="bg-naturalGray h-full">
            <p className="text-sm ml-3">{title}</p>
        {children.map((child) => (
        <div className="mt-4">
        {child}
        </div>

        ))};
        </div>
    );
};
SecondaryFooter.defaultProps={
}

export default SecondaryFooter;