import React from 'react';
import CourseCard from '../../Components/course_portfolio/CourseCard.jsx'; 
import "../../Components/course_portfolio/Course.css";
import BgVideo from "../../Components/course_portfolio/TradingBackground.mp4";

const CourseList = ({ courses }) => {
  return (
    <div className='Cimgs'>
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="course-content">
      {courses.map((course, index) => (
          <CourseCard course={course} key={index}/>
      ))}
    </div>
    </div>
  );
};

export default CourseList;
