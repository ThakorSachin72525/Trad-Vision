import { useLocation } from "react-router-dom";
import "./Course.css";
import BgVideo from "./TradingBackground.mp4";
import Form from "../../Components/Form/Form.js"
import qrCode from "../../Components/course_portfolio/qrCode.jpeg"
import "./ShowCoursePage.css"
import Navbar from "../../Components/NavBar/Navbar.js"

const ShowCoursePage = () => {
  const location = useLocation();
  const { course } = location.state || {};

  console.log(course);

  if (!course) {
    return <div>No course data available</div>;
  }

  return (
    <div className="Cimgs">
      <Navbar/>
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="course-content ">
        <div className="Showcard">
        <h1>{course.title}</h1>
        {course.image && <img src={course.image} className="Showcardcourse" alt={course.title} />}
        <h3>{course.moreDescription}</h3>
        <div className="pricetext">
          <p>Just at</p>
          <p>{course.price}</p>
          <p>{course.discount}</p>

        </div>
        
        </div>
        <img src={qrCode} className="qrcode"/>
      </div>
      <Form/>
    </div>
  );
};

export default ShowCoursePage;
