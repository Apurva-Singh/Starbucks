import React from "react";

interface StepProps{
    stepNumber: number;
    title: string;
}

const Steps: React.FC<StepProps>=(props)=>{
    return(
        <div>
            <div className="p-1 rounded-full">{props.stepNumber}</div>
            <div>{props.title}</div>
            <div>{props.children}</div>
        </div>
    );
};

export default Steps;