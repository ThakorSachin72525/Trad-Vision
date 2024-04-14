import React from "react";
import "./Course.css";
import BgVideo from "./TradingBackground.mp4";
import CourseCard from "./CourseCard.jsx";
import OptionsForBeginners from "./OptionsForBeginners.jpg";
import ForexForBegnners from "./ForexForBegnners.png";
import ForexTrading from "./ForexTrading.jpg";
import AdvancedTechnicalAnalysis from "./AdvancedTechnicalAnalysis.jpg";
import TechnicalAnalysis from "./TechnicalAnalysis.jpg";
import CryptoTrading from "./CryptoTrading.jpg";
import AdvancedOptionsTrading from "./AdvancedOptionsTrading.jpg"

const courses = [
  {
    title: "Options for Beginners",
    description: "Begin your options trading journey with basic strategies and essential concepts.",
    price: "₹1,999",
    discount: "₹2,499",
    image: OptionsForBeginners,
  },
  {
    title: "Forex For Beginners",
    description: "Initiate your forex journey with fundamental insights and risk management essentials.",
    price: "₹2,999",
    discount: "₹3,499",
    image: ForexForBegnners, // Assuming image paths are correct
  },
  {
    title: "Forex Trading",
    description: "Explore currency market dynamics and capitalize on global currency fluctuations.",
    price: "₹7,999",
    discount: "₹8,499",
    image: ForexTrading, // Assuming image paths are correct
  },
  {
    title: "Advanced Technical Analysis",
    description: "Refine trading prowess with intricate chart patterns and advanced indicators.",
    price: "₹8,999",
    discount: "₹9,999",
    image: AdvancedTechnicalAnalysis, // Assuming image paths are correct
  },
  {
    title: "Technical Analysis",
    description: "Master predictive analysis for strategic trading decisions across financial markets.",
    price: "₹4,999",
    discount: "₹5,499",
    image: TechnicalAnalysis, // Assuming image paths are correct
  },
  {
    title: "Crypto Trading",
    description: "Navigate cryptocurrency markets with expertise in trading strategies and risk management.",
    price: "₹6,999",
    discount: "₹7,499",
    image: CryptoTrading, // Assuming image paths are correct
  },
  {
    title: "Advanced Options Trading",
    description: "Harness derivatives markets with sophisticated trading strategies for optimal gains.",
    price: "₹2,999",
    discount: "₹3,499",
    image: AdvancedOptionsTrading, // Assuming image paths are correct
  },
];

function CourseList() {
  return (
    <div className="Cimgs">
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="course-content">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} /> // Use unique IDs as keys
        ))}
      </div>
    </div>
  );
}

export default CourseList;
