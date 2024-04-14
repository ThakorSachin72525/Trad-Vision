import React from 'react';
import { Link } from 'react-router-dom';

// Function to generate a slug from the title
const generateSlug = (title) => {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const CourseCard = ({ course }) => {
  const { title, image, description, price, discount } = course;

  const slug = generateSlug(title);

  const handleClick = () => {
    console.log('Course card clicked:', title);
  };

  return (
    <Link to={`/courses/${slug}`} className="card course-card" onClick={handleClick}>
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
    </Link>
  );
}

export default CourseCard;
