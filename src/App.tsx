import React from "react";
import GettingStarted from "./GettingStarted";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Nav from "./Nav";
import RewardsTabContent from "./RewardsTabContent";
import Tab from "./Tab";
import Tabs from "./Tabs";
import GettingStartedBlocks from "./GettingStartedBlocks";
import StarCodes from "./StarCodes";
import SecondaryFooter from "./SecondaryFooter";
import SecondaryFooterContent from "./SecondaryFooterContent";

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
          img={"https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"}
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
          img={"https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"}
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
          img={"https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"}
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
      <div className=" mt-96">
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

      <StarCodes />
            <div>
      <SecondaryFooter title="At participating stores. Restrictions apply.">
            <SecondaryFooterContent title="EARNING STARS"><div className="text-xs">
              <p className="pt-4">
              
          Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
            <p className=" pt-6">Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
            <p className=" pt-6">Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
            </div>

            
            </SecondaryFooterContent>
              <SecondaryFooterContent title="TERMS OF USE "><div className="text-xs"><p className="pt-4">
              For full program details visit <span className="text-primary-300 focus:outline-none underline"> 
              starbucks.com/rewards/terms</span>.
                </p>
                <p className=" pt-6">
                * Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.
                </p>
                <p className=" pt-6">
                Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the 
                <span className="text-primary-300 focus:outline-none underline">Starbucks Store Locator </span>
                  and search for locations honoring “Redeem Rewards”.
                </p>
                <p className=" pt-6">Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
                </div>
                </SecondaryFooterContent>
              <SecondaryFooterContent title="BENEFITS ">
                <div className="text-xs">
                  <p className="pt-4">
                  Rewards cannot be redeemed for alcoholic beverages or multi-serve items. Not all stores honor tiered Rewards. Select stores redeem 150 Stars for free food or drink items only.

                  </p>
                
                </div>
              </SecondaryFooterContent>
      </SecondaryFooter>
      </div>
      
    </div>
  );
};
App.defaultProps = {};

export default App;
