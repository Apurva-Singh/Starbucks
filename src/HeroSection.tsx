import React from "react";

interface Props{
 
}

const HeroSection: React.FC<Props>=(props)=>{
    return(
        <div className="aspect-w-3 aspect-h-4">
        <div className=" bg-primary-200 bg-hero bg-cover">
        <div
          className="
            text-center
            md:text-left
            py-16
            px-6
            2xl:min-w-69 2xl:mx-auto 2xl:py-72
          "
        >
          <div className="2xl:min-w-77 2xl:mx-auto">
            <h1 className="text-xl font-bold md:text-4xl">
              FREE COFFEE<br />
              IS A TAP AWAY
            </h1>

            <p className="py-6 f">Join now to start earning Rewards.</p>

            <button
              className="
                rounded-3xl
                border-2
                p-2
                px-3
               bg-primary-300
                text-white
                mt-3
                text-xs
                font-medium
                hover:bg-primary-400
              "
            >
              Join in the app
            </button>
            <div className="pt-6">
              <a className="underline hover:no-underline" href="ww"
                >Or join online</a
              >
              <span className="hidden md:inline">for the best experience</span>
            </div>
          </div>
        </div>
         
        </div>
      </div>
    );
};
HeroSection.defaultProps={
}

export default HeroSection;