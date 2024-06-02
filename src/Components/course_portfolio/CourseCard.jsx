import React from 'react';
import './Course.css';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { title, image, description, price, discount, slug } = course;
  const navigate = useNavigate(); // Initialize navigate function using useNavigate

  const handleClick = () => {
    console.log("Navigating to:", `/courses/${slug}`, "with state:", { course });
    navigate(`/courses/${slug}`, { state: {course} }); // Use navigate function to navigate to the course detail page
  };

  return (
    <div className="card course-card" onClick={handleClick}> {/* Remove Link component */}
      <img src={image} alt="Course" className="course-card-image" />
      <div className="course-details">
        <p className="course-card-title"><b>{title}</b></p>
        <p className="course-card-description">{description}</p>
        <div className="pricebtn">
          <p>Just at</p>
          <p className="course-price">{price}</p>
          {discount && <p className="course-discount">{discount}</p>}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
