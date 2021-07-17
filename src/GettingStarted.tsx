import React from "react";
import GettingStartedBlocks from "./GettingStartedBlocks";

interface Props {
  H1: string;
  description: string;
  children: React.ReactElement[];
}

const GettingStarted: React.FC<Props> = ({H1, description, children}) => {
  // console.log(children);

  children.forEach((c) => {
    if (c.type !== GettingStartedBlocks) {
      // eslint-disable-next-line no-throw-literal
      throw "Children of tablist should be gettingstartedblock. received " + c.type;
    }
  });

  return (
    <div>
      <div className="text-center px-3 pb-10">
        <h2 className="font-semibold pt-14 md:text-2xl">
       
          {H1}
        </h2>
        <p className="text-sm pt-3">
         {description}
        </p>
        <div className="lg:flex ">
          <div
            className="
              md:flex
              py-8
              md:max-w-80
              2xl:max-w-60
              md:m-auto md:items-baseline
              space-y-10
            "
          >
          
                {children.map((child) => (
                    <div className="flex md:flex-col flex-1 md:py-0 ">
                      
          <div className="md:m-auto">
        
                <img src={child.props.img} alt={child.props.alt} className="md:h-10 md:w-10" />
              </div>
              <div className="text-left px-2 md:text-center">
                <h2 className="font-semibold md:hidden">
                 {child.props.heading}
                </h2>
                <h2 className="font-semibold hidden md:block pt-4">
                 {child.props.headingLarge}
                </h2>
              
      
              {child }
              </div>
            </div>
))}
            </div>

         
          </div>
        </div>
      </div>
 
  );
};
GettingStarted.defaultProps = {};

export default GettingStarted;
