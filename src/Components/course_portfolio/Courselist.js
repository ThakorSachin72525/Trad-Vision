import React from "react";
import "./Course.css";
import BgVideo from "./TradingBackground.mp4";
import OptionsForBeginners from "./OptionsForBeginners.jpg";
import ForexForBegnners from "./ForexForBegnners.png";
import ForexTrading from "./ForexTrading.jpg";
import AdvancedTechnicalAnalysis from "./AdvancedTechnicalAnalysis.jpg";
import TechnicalAnalysis from "./TechnicalAnalysis.jpg";
import CryptoTrading from "./CryptoTrading.jpg";
import AdvancedOptionsTrading from "./AdvancedOptionsTrading.jpg";
import CourseCard from "./CourseCard";

function Courselist() {
  return (
    <div className="Cimgs">
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="course-content">

      <CourseCard
        title="OptionsForBeginners : "
        description="Begin your options trading journey with basic strategies and essential concepts."
        price="₹1,999"
        discount="₹2,499"
        img={OptionsForBeginners}
      />
      
      <CourseCard
        title="ForexForBegnners : "
        description="Initiate your forex journey with fundamental insights and risk management essentials."
        price="₹2,999"
        discount="₹3,499"
        img={ForexForBegnners}
      />

      <CourseCard
        title="ForexTrading : "
        description="Explore currency market dynamics and capitalize on global currency fluctuations."
        price="₹7,999"
        discount="₹8,499"
        img={ForexTrading}
      />

      <CourseCard
        title="AdvancedTechnicalAnalysis : "
        description="Refine trading prowess with intricate chart patterns and advanced indicators."
        price="₹8,999"
        discount="₹9,999"
        img={AdvancedTechnicalAnalysis}
      />

      <CourseCard
        title="TechnicalAnalysis : "
        description="Master predictive analysis for strategic trading decisions across financial markets."
        price="₹4,999"
        discount="₹5,499"
        img={TechnicalAnalysis}
      />

      <CourseCard
        title="CryptoTrading : "
        description="Navigate cryptocurrency markets with expertise in trading strategies and risk management."
        price="₹6,999"
        discount="₹7,499"
        img={CryptoTrading}
      />

      <CourseCard
        title="AdvancedOptionsTrading : "
        description="Harness derivatives markets with sophisticated trading strategies for optimal gains."
        price="₹2,999"
        discount="₹3,499"
        img={AdvancedOptionsTrading}
      />
      </div>

    </div>
  );
}

export default Courselist;
