import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courses } from "./coursedetails.jsx";
import "./cardslider.css";

const CardSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="maincard">
      <div className="headers" style={{ width: "100%", background: "black", textWrap: "wrap" }}>
        Our Best Seller <span>Courses</span>
      </div>
      <div className="secondcard">
        <Slider {...settings}>
          {courses.map((d, index) => (
            <div key={index} className="card">
              <div className="thirdcard">
                <img id="cardImg" src={d.image} alt={d.title} />
              </div>
              <div className="card_content">
                <p id="card_title">{d.title}</p>
                <p>{d.description}</p>
                <button style={{ width: "113%" }} id="card_btn">
                  Just At
                  <p>{d.price}</p>
                  <p id="card_discount">{d.discount}</p>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
