import React from 'react';
import "./Course.css";
import BgVideo from "./TradingBackground.mp4";
import OptionsForBeginners from "./OptionsForBeginners.png";
import ForexForBegnners from "./ForexForBegnners.png";
import ForexTrading from "./ForexTrading.png";
import AdvancedTechnicalAnalysis from "./AdvancedTechnicalAnalysis.png";
import TechnicalAnalysis from "./TechnicalAnalysis.png";
import CryptoTrading from "./CryptoTrading.png";
import AdvancedOptionsTrading from "./AdvancedOptionsTrading.png";

function Courselist() {
  return (
    <div className="Cimgs">
      {/* Background video */}
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Course content */}
      <div className="course-content">
        {/* Course cards */}
        <div className="course-card">
          <img src={OptionsForBeginners} alt="Options for Beginners" />
          <div className="course-details">
            <p><b>Options for Beginners:</b> Begin your options trading journey with basic strategies and essential concepts.</p>
            <div className="pricebtn">
              <p>Just at</p>
              <p>₹1,999</p>
              <p>₹2,499</p>
            </div>
          </div>
        </div>

        <div className="course-card">
          <img src={ForexForBegnners} alt="Forex for Beginners" />
          <div className="course-details">
            <p><b>Forex for Beginners:</b> Initiate your forex journey with fundamental insights and risk management essentials.</p>
            <div className="pricebtn">
              <p>Just at</p>
              <p>₹2,999</p>
              <p>₹3,499</p>
            </div>
          </div>
        </div>

        <div className="course-card">
          <img src={ForexTrading} alt="Forex Trading" />
          <div className="course-details">
            <p><b>Forex Trading:</b> Explore currency market dynamics and capitalize on global currency fluctuations.</p>
            <div className="pricebtn">
              <p>Just at</p>
              <p>₹7,999</p>
              <p>₹8,499</p>
            </div>
          </div>
        </div>

        <div className="course-card">
          <img src={AdvancedTechnicalAnalysis} alt="Advanced Technical Analysis" />
          <div className="course-details">
            <p><b>Advanced Technical Analysis:</b> Refine trading prowess with intricate chart patterns and advanced indicators.</p>
            <div className="pricebtn">
              <p>Just at</p>
              <p>₹8,999</p>
              <p>₹9,999</p>
            </div>
          </div>
        </div>

        <div className="course-card">
          <img src={TechnicalAnalysis} alt="Technical Analysis" />
          <div className="course-details">
            <p><b>Technical Analysis:</b> Master predictive analysis for strategic trading decisions across financial markets.</p>
            <div className="pricebtn">
              <p>Just at</p>
              <p>₹4,999</p>
              <p>₹5,499</p>
            </div>
          </div>
        </div>

        <div className="course-card">
          <img src={CryptoTrading} alt="Crypto Trading" />
          <div className="course-details">
            <p><b>Crypto Trading:</b> Navigate cryptocurrency markets with expertise in trading strategies and risk management.</p>
            <div className="pricebtn">
              <p>Just at</p>
              <p>₹6,999</p>
              <p>₹7,499</p>
            </div>
          </div>
        </div>

        <div className="course-card">
          <img src={AdvancedOptionsTrading} alt="Advanced Options Trading" />
          <div className="course-details">
            <p><b>Advanced Options Trading:</b> Harness derivatives markets with sophisticated trading strategies for optimal gains.</p>
            <div className="pricebtn">
              <p>Just at</p>
              <p>₹1,999</p>
              <p>₹2,499</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courselist;
