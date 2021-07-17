import React from "react";
import GettingStarted from "./GettingStarted";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Nav from "./Nav";
import RewardsTabContent from "./RewardsTabContent";
import Tab from "./Tab";
import Tabs from "./Tabs";
import GettingStartedBlocks from "./GettingStartedBlocks";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <div className="font-sans">
      <Nav />
      <Header />

      <HeroSection />

      <GettingStarted
        H1="Getting Started is easy"
        description="Earn Stars and get rewarded in a few easy steps."
      >
        <GettingStartedBlocks
          img={"./img/1.png"}
          alt={"1"}
          heading={"Download the Starbucks app"}
          headingLarge={"Create an account in an easy way"}
        >
          <p className="text-sm md:pt-6">
            <a
              href="https://starbucks.app.link/VLa2I3inh9"
              className="text-primary-300 underline hover:no-underline"
            >
              Join in the app{" "}
            </a>
            to get access to the full range of Starbucks Rewards benefits. You
            can also
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
          img={"./img/2.png"}
          alt={"2"}
          heading={"Order and pay how you’d like"}
        >
          <p className="text-sm md:pt-6">
            Use cash, credit/debit card or save some time and pay right through
            the app. You will collect Stars all ways.
            <a
              href="www"
              className="text-primary-300 underline hover:no-underline"
            >
              Learn how
            </a>
          </p>
        </GettingStartedBlocks>
        <GettingStartedBlocks
          img={"./img/3.png"}
          alt={"3"}
          heading={"Earn Stars, get Rewards"}
        >
          <p className="text-sm md:pt-6">
            As you earn Stars, you can redeem them for Rewards-like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </p>
        </GettingStartedBlocks>
      </GettingStarted>

      <Tabs initialActiveTab={2}>
        <Tab
          title={
            <>
              25 <span className="text-sm text-red-700">★</span>
            </>
          }
        >
          <RewardsTabContent
            image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"
            title="Customise your drink"
            description="Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
          />
        </Tab>
        <Tab
          title={
            <>
              50 <span className="text-sm text-red-700">★</span>
            </>
          }
        >
          <RewardsTabContent
            image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png./img/tea.png"
            title="Brewed hot coffee, bakery item or hot tea"
            description="Pair coffee cake or an almond croissant with your fresh cup of hot brew."
          />
        </Tab>
        <Tab
          title={
            <>
              200 <span className="text-sm text-red-700">★</span>
            </>
          }
        >
          {" "}
          <RewardsTabContent
            image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png"
            title="Handcrafted drink, hot breakfast or parfait"
            description="Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
          />{" "}
        </Tab>
        <Tab
          title={
            <>
              150 <span className="text-sm text-red-700">★</span>
            </>
          }
        >
          {" "}
          <RewardsTabContent
            image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png"
            title="Salad, sandwich or protein box"
            description="Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box."
          />{" "}
        </Tab>
        <Tab
          title={
            <>
              400 <span className="text-sm text-red-700">★</span>
            </>
          }
        >
          {" "}
          <RewardsTabContent
            image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png"
            title="Select merchandise or at-home coffee"
            description="Take home a signature cup, a bag of coffee or your choice of select coffee accessories."
          />{" "}
        </Tab>
      </Tabs>
      <div className="absolute mt-96">
        <GettingStarted
          H1="Endless Extras"
          description="Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.
        "
        >
          <GettingStartedBlocks
            img={
              "https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
            }
            alt={"fun-freebies"}
            heading={"Fun freebies"}
          >
            <p className="text-sm md:pt-6">
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </p>
            <a
              href="https://starbucks.app.link/VLa2I3inh9"
              className="text-primary-300 underline hover:no-underline"
            >
              Learn More{" "}
            </a>
          </GettingStartedBlocks>
          <GettingStartedBlocks
            img={
              "https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
            }
            alt={"2"}
            heading={"Order & pay ahead          "}
          >
            <p className="text-sm md:pt-6">
              Enjoy the convenience of in-store, curbside or drive-thru pickup
              at select stores.
            </p>
            <a
              href="www"
              className="text-primary-300 underline hover:no-underline"
            >
              Learn more
            </a>
          </GettingStartedBlocks>
          <GettingStartedBlocks
            img={
              "https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
            }
            alt={"3"}
            heading={"Get to free faster"}
          >
            <p className="text-sm md:pt-6">
              Earn Stars even quicker with Bonus Star challenges, Double Star
              Days and exciting games
            </p>

            <a
              href="www"
              className="text-primary-300 underline hover:no-underline"
            >
              Learn more
            </a>
          </GettingStartedBlocks>
        </GettingStarted>
      </div>
    </div>
  );
};
App.defaultProps = {};

export default App;
