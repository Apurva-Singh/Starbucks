import React from "react";
import GettingStartedBlocks from "./GettingStartedBlocks";

interface Props {}

const GettingStarted: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="text-center px-3 pb-10">
        <h2 className="font-semibold pt-14 md:text-2xl">
          Getting started is easy
        </h2>
        <p className="text-sm pt-3">
          Earn Stars and get rewarded in a few easy steps.
        </p>
        <div className="lg:flex">
          <div
            className="
              md:flex
              py-8
              md:max-w-80
              2xl:max-w-60
              md:m-auto md:items-baseline
              space-y-6
            "
          >
            <GettingStartedBlocks
              imgURL="./img/1.png"
              heading="Download the Starbucks app"
              headingLarge="Create an account"
              alt="1"
            >
              <p className="text-sm md:pt-6">
                <a
                  href="https://starbucks.app.link/VLa2I3inh9"
                  className="text-primary-300 underline hover:no-underline"
                >
                  Join in the app{" "}
                </a>
                to get access to the full range of Starbucks Rewards benefits.
                You can also
                <a
                  href="www"
                  className="text-primary-300 underline hover:no-underline"
                >
                  {" "}
                  join online
                </a>
                .
              </p>
            </GettingStartedBlocks>

            <GettingStartedBlocks
              imgURL="./img/2.png"
              heading="
              Order and pay how you’d like"
              alt="2"
            >
          <p className="text-sm md:pt-6">
                  Use cash, credit/debit card or save some time and pay right
                  through the app. You will collect Stars all ways.
                  <a
                    href="www"
                    className="text-primary-300 underline hover:no-underline"
                    >Learn how</a
                  >
                </p>
            </GettingStartedBlocks>

            <GettingStartedBlocks
              imgURL="./img/3.png"
              heading="Earn Stars, get Rewards"
              alt="3"
            >
        <p className="text-sm md:pt-6">
                  As you earn Stars, you can redeem them for Rewards-like free
                  food, drinks, and more. Start redeeming with as little as 25
                  Stars!
                </p>
            </GettingStartedBlocks>
          </div>
        </div>
      </div>
    </div>
  );
};
GettingStarted.defaultProps = {};

export default GettingStarted;
