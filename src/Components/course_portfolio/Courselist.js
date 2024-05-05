import React from "react";
import "./Course.css";
import BgVideo from "./TradingBackground.mp4";
import CourseCard from "./CourseCard.jsx";
import { courses } from "./coursedetails.jsx";

function CourseList() {
  return (
    <div className="Cimgs">
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="course-content">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
